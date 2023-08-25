function coletarNota(){
    let nota = parseFloat(prompt(`Digite a nota ${notas.length + 1} : `));
    nota >= 0 && nota <= 10 ? notas.push(nota) : 
    console.log("Coloque notas entre 0 e 10");
}

function somaNotas(){
    let soma = 0;
    notas.forEach(nota => {
        soma += nota;
    });
    return soma;
}

let notas = [];
let escolha = parseInt(prompt("Qual o motivo da consulta? 1-Media ou 2- Conseguir aprovacao com media 7? "));

if(escolha == 1){
    console.log("Calculadora de média");
    do
        coletarNota(); 
    while (notas.length < 3);
    return somaNotas()/notas.length >= 7 ? console.log("Aprovado") : console.log("Reprovado");
}
console.log("Quanto preciso para passar?");
do
    coletarNota(); 
while (notas.length < 2);
let nota3 = (21 - somaNotas());
nota3 > 10 ? console.log("Reprovado") : 
console.log(`Precisa tirar ${nota3} para passar.`);