# Typescript Studies
Repository with studies to understand how to work with Typescript


1. [Seção 1: Introdução](#introducao) 
2. [Seção 2: Fundamentos do Typescript](#fundamentos)
3. [Seção 3: Avançando em Tipos]()
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


### O que é Node.JS
O Node.js pode ser definido como um ambiente de execução Javascript server-side.

Isso significa que com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados.

A principal característica que diferencia o Node.JS de outras tecnologias, como PHP, Java, C#, é o fato de sua execução ser single-thread. Ou seja, apenas uma thread é responsável por executar o código Javascript da aplicação, enquanto que nas outras linguagens a execução é multi-thread.


### Instalando o Typescript
- Para instalar o Typescript vamos utilizar o npm 
- O nome do pacote é typescript
- E vamos adicionar de forma global com a **flag -g** 
- A partir da instalação temos como executar/compilar TS em qualquer local da nossa máquina com o comando **tsc**
- ``npm install typescript -g``


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
- Quais são: number, string e boolean 
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




<div id='apendice-javascript'/> 
## Seção 15: Apêndice A: Javascript Moderno (ES6)
### O que é JS ES6?
* É  uma versão mais nova de JS que trouxe diversas funcionalidades;
* São os conhecimentos base para aprender os frameworks modernos (Vue, React e etc); 
* Também agilizam muito o desenvolvimento de JS Puro; 

### Variáveis como `let` e `const`
* A `let` que é semelhante ao var, podemos alterar valores; 
* E a `const` que é uma forma de declarar constantes; 
* O grande diferencial é o escopo de blocos, não temos mais variávels sendo `vazadas` para outros escopos por causa do mesmo nome.

## Seção 16: Apêndice B: Introdução as APIs 
## Seção 17: Conclusão dos cursos e próximos passos 
