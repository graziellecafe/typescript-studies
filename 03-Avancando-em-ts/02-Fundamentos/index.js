"use strict";
// 1 - arrays 
let numbers = [1, 2, 3];
let names = ['Grazielle', 'Amanda'];
numbers.push(5);
console.log(numbers);
console.log(names);
// 2 - outra sintaxe array 
const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2);
// 3 - retorno da funcao 
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Grazielle Amanda do Carmo Café"));
// 4 - opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(2, 6);
function showId(id) {
    console.log(`O id do usuário é: ${id}`);
}
showId(5);
showId("10");
function showCords(obj) {
    console.log(obj.x);
    console.log(obj.y);
    console.log(obj.z);
}
const numberCords = {
    x: 30,
    y: 40,
    z: 60
};
showCords(numberCords);
