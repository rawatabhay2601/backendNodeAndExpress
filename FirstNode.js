const a = 2;
const b = 5;

const product = (a,b) => {
    return a*b;
}

const student = {
    name : "Abhay",
    age : 24,
    greet() {
        console.log(`Hi! I'm ${this.name}`);
    }
}
student.greet();