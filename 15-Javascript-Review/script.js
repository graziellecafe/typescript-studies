// 1 - var , let e const 
var x = 10; 
var y = 15; 

if(y > 10){
    var x = 5; 
    console.log(x); 
}
console.log(x); 

let a = 10; 
let b = 15; 

if (b > 10){ 
    let a = 5;
    console.log(b)
}
console.log(b);

// 2 - Arrow function
const sum = function sum (a, b) {
    return a + b; 
}

const arrowSum = (a, b) => {
    return a + b; 
}

const arrowFunction2 = (a, b) => a + b

console.log(sum(5,5)); 
console.log(arrowSum(4,6)); 
console.log(arrowFunction2(3,2));

// 3 - Filter
const array = [1, 2, 3, 4, 5]; 
const highNumbers = array.filter((number) => {
    if(number >= 3) {
        return number; 
    }
})

console.log(highNumbers); 
console.log(array); 

//  exercicio 2
const users = [
    {name: "Grazielle", available: true}, 
    {name: "José", available: true}, 
    {name: "Paula", available: false}, 
    {name: "Fernando", available: true}, 
]; 

const availableUsers = users.filter((user) => user.available);
console.log(availableUsers)

// 4 - map 
const product = [ 
    { name: "Camisa", price:10.99, category: "Roupas" },
    { name: "Chaleira Elétrica", price:10.99, category: "Eletro" },
    { name: "Fogão", price:10.99, category: "Eletro" },
    { name: "Calça Jeans", price:10.99, category: "Roupas" },

]; 

product.map((product) => {
    if(product.category === "Roupas") {
        product.onSale = true
    }
}); 

console.log(product);

// 6 - destructuring 
const fruits = [ "Maçã", "Laranja", "Mamão"]; 
const [f1, f2, f3] = fruits; 
console.log(f1); 
console.log(f2); 
console.log(f3); 

// exercicio 2 
const productDetails = { 
    name: "Calça Jeans", 
    price: 10.99, 
    category: "Periféricos",
    color: "Cinza"
}; 

const {name: productName, price, category: productCategory, color} = productDetails; 
console.log(productDetails); 
console.log(`O nome do produto é ${productName} e o seu preco é ${price}`); 


// 7 - spread operator 
const a1 = [1, 2, 3]; 
const a2 = [ 4, 5, 6]; 

const a3 = [...a1, ...a2]; 
console.log(a1); 
console.log(a2); 
console.log(a3); 

// 8 - classes 
class Product { 
    constructor(name, price){
        this.name = name, 
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100-discount)/100)
    }
}

const shirt = new Product("Camisa Gola V", 20); 
console.log(shirt.name); 
console.log(price); 
console.log(shirt.productWithDiscount(10)); 

// 9 - heranças 
class ProductsWithAtributtes extends Product { 
    constructor(name, price, colors) { 
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color); 
        })
    }
}

const hat = new ProductsWithAtributtes("")