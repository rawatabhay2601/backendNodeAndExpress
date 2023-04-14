const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then( ([data,fieldData]) => {
    res.render('shop/product-list', {
      prods: data,
      pageTitle: 'All Products',
      path: '/products'
    })
  })
  .catch(err => console.log(err))
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
  .then( ([row,fieldData]) => {
    res.render('shop/product-detail', {
      product: row[0],
      pageTitle: row[0].title,
      path: '/products'
    })
  })
  .catch(err => console.log(err))
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
  .then( ([data,fieldData]) => {
    res.render('shop/index', {
      prods: data,
      pageTitle: 'Shop',
      path: '/'
    })
  })
  .catch(err => console.log(err))
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

exports.deleteProduct = (req,res,next) => {
  const prodId = req.params.productId;
  Product.deleteById(prodId)
  .then( () => res.redirect('/'))
  .catch( err => console.log(err))
};