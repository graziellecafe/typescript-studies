// 1 - var,let e const 
var x = 10;  
var y = 11;

if (y>10){
    var x = 5; 
    console.log(x);
}

console.log(x)

// 2 - arrow function
const sum = function sum(a,b) {
    return a + b
}

const arrowSum = (a, b) => {
    return a + b
}

const arrowSum2 = (a, b) => a + b


console.log(sum(5,5))
console.log(arrowSum(5,5))
console.log(arrowSum2(5,5))

const greeting = (name) => {
    if(name){
        return `Olá, ${name}`;
    } else {
        return `Olá!`; 
    }
}

console.log(greeting("Matheus")); 
console.log(greeting());

const teste = () => console.log("Testando"); 
teste(); 

