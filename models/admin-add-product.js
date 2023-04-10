const path = require('path');
const dataPath = path.join(__dirname,'..','data','products.json');
let products = [];

const fs = require('fs');

module.exports = class Products {
    
    constructor(prod){
        this.prod = prod;
    }

    save(){
        fs.readFile(dataPath, (err, fileContent) => {
            
            if(!err){
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(dataPath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
}