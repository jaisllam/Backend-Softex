//declaração das variaveis
let nome = prompt("Digite o seu nome:");
let salario = parseFloat(prompt("Digite sua renda mensal:"));
let idade = parseInt(prompt("Qual a sua idade?"));
let diploma = confirm("Possui curso superior?");

// Exibindo os dados do cadastro
console.log("--------------------------------")
console.log("Mostrando os dados cadastrados");
console.log("Nome: " + nome);
console.log("Salário: " + salario);
console.log("Idade: " + idade);
console.log("Possui Diploma: " + diploma);