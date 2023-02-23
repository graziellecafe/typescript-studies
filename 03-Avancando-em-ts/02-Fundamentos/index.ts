// 1 - arrays 
let numbers: number[] = [1, 2, 3]; 
let names: string[] = ['Grazielle', 'Amanda']; 

numbers.push(5); 
console.log(numbers); 
console.log(names);

// 2 - outra sintaxe array 
const numbers2: Array<number> = [1, 2, 3, 4, 5]; 
console.log(numbers2); 

// 3 - retorno da funcao 
function greeting(name: string): string {
    return `Olá ${name}`;
}

console.log(greeting("Grazielle Amanda do Carmo Café")); 

// 4 - opcionais
function showNumbers(a: number, b: number, c?:number) {
    console.log("A: " + a); 
    console.log("B: " + b);
    if(c){
        console.log("C: " + c); 
    }
}

showNumbers(1, 2, 3); 
showNumbers(2, 6); 

// type alias
type ID = string | number; 

function showId(id: ID) {
    console.log(`O id do usuário é: ${id}`)
}

showId(5); 
showId("10"); 

// interface
interface Point {
    x: number, 
    y: number, 
    z: number
}

function showCords(obj: Point) {
    console.log(obj.x)
    console.log(obj.y)
    console.log(obj.z)
}

const numberCords: Point = {
    x: 30, 
    y: 40, 
    z: 60
}

showCords(numberCords)