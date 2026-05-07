// 1. Converter temperaturas de Celsius para Fahrenheit: Dado o array de temperaturas em
// Celsius [0, 25, 30, 100], crie um novo array com as temperaturas convertidas para Fahrenheit
// usando a fórmula (Celsius * 9/5) + 32.

const input = [0, 25, 30, 100];

function celsiusToFahrenheit(input) {
  return input.map((t) => (t * 9) / 5 + 32);
}

let result = celsiusToFahrenheit(input);
console.log(result);

// 2. Extrair os nomes das pessoas: Dado um array de objetos de pessoas, onde cada objeto tem o
// formato { nome: "João", idade: 30 }, crie um novo array contendo apenas os nomes das pessoas.

const pessoas = [
  { nome: "Ana", idade: 35 },
  { nome: "João", idade: 30 },
  { nome: "Pedro", idade: 20 },
  { nome: "Caio", idade: 18 },
  { nome: "Isabela", idade: 25 },
];

let nomes = pessoas.map((p) => p.nome);
console.log(nomes);

// 3. Formatação de preços: Dado o array [10, 25.5, 50, 100], crie um novo array onde os valores
// sejam convertidos para strings no formato de preço (ex: "R$ 10,00").

const precos = [10, 25.5, 50, 100];

let precosFormatados = precos.map((p) =>
  p.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  }),
);

console.log(precosFormatados);

// 4. Aumentar salários: Dado um array de objetos com salario e nome, crie um novo array onde o
// salário de cada pessoa é aumentado em 10%. Exemplo de entrada: [ { nome: "Maria", salario:
// 1500 }, { nome: "José", salario: 2000 } ].

const funcionarios = [
  { nome: "Maria", salario: 1500 },
  { nome: "José", salario: 2000 },
];

let salarios = funcionarios.map((f) => f.salario * 1.1);
console.log(salarios);

// 5. Filtrar números pares: Dado o array [1, 2, 3, 4, 5, 6, 7, 8, 9], crie um novo array que contenha
// apenas os números pares.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let pares = nums.filter((n) => n % 2 === 0);
console.log(pares);

// 6. Filtrar pessoas maiores de 18 anos: Dado o array de pessoas com nome e idade, como
// [ { nome: "João", idade: 17 }, { nome: "Maria", idade: 20 } ], crie um novo array contendo apenas
// as pessoas com idade maior ou igual a 18 anos.

const listaPessoas = [
  { nome: "João", idade: 17 },
  { nome: "Maria", idade: 20 },
  { nome: "Ana", idade: 15 },
  { nome: "Pedro", idade: 20 },
  { nome: "Caio", idade: 18 },
  { nome: "Isabela", idade: 25 },
];

let maioresIdade = listaPessoas.filter((p) => p.idade >= 18);
console.log(maioresIdade);

// 7. Filtrar palavras com mais de 5 caracteres: Dado o array de palavras ["maçã", "banana", "uva",
// "laranja"], crie um novo array contendo apenas as palavras que têm mais de 5 caracteres.

const palavras = ["maçã", "banana", "uva", "laranja"];
let palavrasMaiores = palavras.filter((p) => p.length > 5);
console.log(palavrasMaiores);

// 8. Encontrar o primeiro número maior que 10: Dado o array [5, 7, 12, 8, 15], encontre o
// primeiro número maior que 10.

const listaNumeros = [5, 7, 12, 8, 15];
let maiorQueDez = listaNumeros.find((n) => n > 10);
console.log(maiorQueDez);

// 9. Encontrar um produto pelo nome: Dado o array de pessoas [ { nome: "João", idade: 17 },
// { nome: "Maria", idade: 20 } ], encontre a primeira pessoa com o nome "Maria".

const lista = [
  { nome: "João", idade: 17 },
  { nome: "Maria", idade: 20 },
];
let maria = lista.find((p) => p.nome === "Maria");
console.log(maria);

// 10. Encontrar uma palavra que começa com a letra "a": Dado o array ["maçã", "banana",
// "abacaxi", "laranja"], encontre a primeira palavra que começa com a letra "a".

const frutas = ["maçã", "banana", "abacaxi", "laranja"];
let a = frutas.find((f) => f.charAt(0) === "a");
console.log(a);

// 11. Contar ocorrências de um valor: Dado o array ["maçã", "banana", "maçã", "laranja"], use o
// reduce para contar quantas vezes a palavra "maçã" aparece.

// 12. Concatenar palavras em uma frase: Dado o array ["Eu", "gosto", "de", "programar"], use o
// reduce para criar a frase completa: "Eu gosto de programar".

// 13. Somar os salários: Dado um array de objetos de funcionários com nome e salario como
// [ { nome: "Maria", salario: 2000 }, { nome: "José", salario: 1500 }, { nome: "Ana", salario: 3000 } ],
// use o reduce para calcular o total dos salários

// Interface
