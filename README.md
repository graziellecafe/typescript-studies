# Typescript Studies
Repository with studies to understand how to work with Typescript


1. [Seção 1: Introdução](#introducao) 
2. [Seção 2: Fundamentos do Typescript](#fundamentos)
3. [Seção 3: Avançando em Tipos](#avancando-em-ts)
4. [Seção 4: Narrowing - Verificação de tipos e de dados]()
5. [Seção 5: Funções com Typescript]()
6. [Seção 6: Entendendo os Object Types]()
7. [Seção 7: Criação de tipos]()
8. [Seção 8: Classes com Typescript]()
9. [Seção 9: Módulos com TS]()
10. [Seção 10: Decorators]()
11. [Seção 11: React com Typescript]()
12. [Seção 12: Projeto: To do list React com Typescript]()
13. [Seção 13: Express com Typescript]()
14. [Seção 14: Projeto: API RESTful com Typescript, Express, MongoDB e mais recursos]()
15. [Apêndice A: Revisão Javascript Moderno](#apendice-javascript)

<div id='introducao'/> 


## Seção 1: Introdução 
### O que é Typescript
- Typescript é um superset para a linguagem de Javascript
- Ou seja, adiciona funções ao Javascript, como a **declaração de tipos** de variável 
- Pode ser utilizado em frameworks/libs como: Express e React 
- Precisa ser compilado em Javascript, ou seja, não executamos TS
- Desenvolvido e mantido pelo Microsoft 

### Porque Typescript? 
- Adiciona confiabilidade ao programa  (tipos)
- Provê novas funcionalidades a JS, como interfaces
- Com TS podemos verificar os erros antes da execução do código, ou seja, no desenvolvimento 
- Deixa JS mais explícito, diminuindo a quantidade de bugs
- Por estes e outros motivos perdemos menos tempo com debug 


### O que é Node.JS
O Node.js pode ser definido como um ambiente de execução Javascript server-side.

Isso significa que com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados.

A principal característica que diferencia o Node.JS de outras tecnologias, como PHP, Java, C#, é o fato de sua execução ser single-thread. Ou seja, apenas uma thread é responsável por executar o código Javascript da aplicação, enquanto que nas outras linguagens a execução é multi-thread.

Como usar: digitar node no terminal

### Instalando o Typescript
- Para instalar o Typescript vamos utilizar o npm 
- O nome do pacote é typescript
- E vamos adicionar de forma global com a **flag -g** 
- A partir da instalação temos como executar/compilar TS em qualquer local da nossa máquina com o comando **tsc**
- `npm -v`
- ``sudo npm install typescript -g``
-  `tsc -v`

Para rodar o arquivo ts: `tsc index.ts`

### Primeiro programa com ts 
```js
// Desafio 1 
function soma (a: number, b: number) {
    return a + b; 
}

console.log(soma(5,6)); 
```

<div id='fundamentos'/> 

## Seção 2: Fundamentos do Typescript
### O que são tipos? 
- Em Typescript a principal função é determinar tipos para os dados 
- Isso vai garantir a qualidade do código 
- Além de fazer o TS nos ajudar na hora do desenvolvimento 
- Ou seja, precisamos definir corretamente o tipo das variáveis, dos retornos das funções, das manipulações de dados 
- Consequentemente teremos um software melhor programado e é este o principal intuito do TS 

### Tipos primitivos
- Há diversos tipos em TS, vamos começar pelos primitivos
- Quais são: **number, string e boolean** 
- Todos estes são inseridos com letras minúsculas 

### Conhecendo o number 
- O tipo number garante que o dado seja um número 
- Logo podemos inserir apenas números na variável 
- 
- E também mudar o valor para outro número 
- O Typescript possibilita também a inserção de métodos numéricos apenas 

### Type annotation e Type inference 
- Annotation é quando definimos o tipo de um dado manualmente
- Inference é quando o TS identifica e define o tipo de dados para nós 

<div id='avancando-em-ts'/> 

## Seção 3: Avançando em Tipos
### Arrays
- Podemos especificar um array como tipo também 
- Se temos um array de números: ```number[]```
- Se é um array de string: ```string[]```
- Isso acontece pois geralmente os arrays possuem apenas um único tipo de dado entre seus itens 
- Podemos utilizar também o modo Array<number

### O tipo Any 
- O any transmite ao TS que qualquer tipo satisfaz a variável 
- Devemos evitar ao máximo este tipo, pois vai contra os princípios do Javascript
- Dois casos de uso: o tipo do dado realmente não importa e arrays com dados de múltiplos tipos 

### Tipo de parâmetro de funções 
- Podemos definir o tipo de cada parâmetro de uma função 
- Assim adicionamos o seu uso correto 
- A sintaxe é 
```javascript
    minhaFuncao (nome: string) {
        // body da funcao 
    }
```
- Agora podemos passar o parâmetro nome, apenas como texto

### Propriedades opcionais 
- Nem sempre os objetos possuem todas as propriedades que poderiam possuir 
- Por isso temos as propriedades opcionais 
- Para ter esse resultado devemos colocar uma interrogação: 
``` 
{
    nome: string, 
    sobrenome?: string
}
```

### Union type 
- O union type é uma alternativa melhor do que o any 
- Onde podemos determinar dois tipos para um dado 
- A sintaxe ```number | string ```


### Type Alias 
```javascript
    type ID = string | number; 

    function showId(id: ID) {
        console.log(`O id do usuário é: ${id}`)
    }
```

### Introdução ás interfaces
- Uma outra maneira de nomear um tipo de objeto 
- Podemos determinar um nome para o tipo 
- Também podemos escolher quais as propriedades e seus tipos
```javascript
    interface Point {
        x: number, 
        y: number, 
        z: number
    }

    function showCords(obj: Point) {
        console.log(obj)
    }
```

### Literals types
```javascript
    function showDirection(direction: "left" | "right" | "center") {
        console.log(`A direção é ${direction}`);
    }

    showDirection("left")
```



<div id='apendice-javascript'/> 

## Seção 15: Apêndice A: Javascript Moderno (ES6)
### O que é JS ES6?
* É  uma versão mais nova de JS que trouxe diversas funcionalidades;
* São os conhecimentos base para aprender os frameworks modernos (Vue, React e etc); 
* Também agilizam muito o desenvolvimento de JS Puro; 

### Variáveis como `let` e `const`
* A `let` que é semelhante ao `var`, podemos alterar valores; 
* E a `const` que é uma forma de declarar constantes; 
* O grande diferencial é o escopo de blocos, não temos mais variávels sendo `vazadas` para outros escopos por causa do mesmo nome.

### Arrow functions
* A arrow function é um recurso para criar funcoes de forma mais simples
* Mas ela nao funciona exatamente como uma function em todos os aspectos
* O this da arrow function é relacionado ao elemento pai de quem está a executando 

### Filter
* O filter é um método de array para filtrar dados, baseado em alguma condição que estabalecemos
* Isso nos dá um array com apenas os elementos que queremos, de forma performática
* Há vários métodos de array importantes no ES6, este é um deles 
```javascript
const array = [1, 2, 3, 4, 5]; 
const highNumbers = array.filter((number) => {
    if (number >= 3) {
        return number; 
    }
})

console.log(highNumbers);
```

### Map 
* O map é um método de array também, que percorre todos os elementos 
* Quando utilizamos map estamos querendo modificar os dados do array 

### Destructuring 
- O destructuring é um recurso que pode ser utilizado em em arrays e objetos 
- A ideia é transformar os itens de um desses dados em variáveis 
- Simplificando a declaração de n variáveis para apenas 1 linha 

### Spread operator 
- O spread pode ser utilizado também em arrays e objetos 
- Utilizamos para constituir novos valores desdes dados em outros arrays 
- Ou seja, podemos unir vários arrays de maneira simples ou adicionar valores de um objeto a outro 

### Classes 
- As classes são recursos fundamentais para programar com orientação a objetos 
- Agora o JS tem este recursos implementados onde temos acesso a: constructor, propriedades, métodos e mais
- Antes as classes eram baseadas em funções (constructor functions)

### Herança 
- Podemos criar herança de classes com ES6 também 
- Utilizamos a palavra extends para referir a classe herdade 
- E as propriedades que utilizamos dela, devem ser enviadas via função super 

