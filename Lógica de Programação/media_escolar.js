console.log("Calculadora de média");
console.log("Coloque notas entre 0 e 10");

let nota1, nota2, nota3;

do {
  nota1 = parseFloat(prompt("Digite a nota 1: "));
  nota2 = parseFloat(prompt("Digite a nota 2: "));
  nota3 = parseFloat(prompt("Digite a nota 3: "));
  
  if ((nota1 < 0 || nota1 > 10) || (nota2 < 0 || nota2 > 10) || (nota3 < 0 || nota3 > 10)) {
    console.log("--------------------------");
    console.log("Coloque notas entre 0 e 10");
  }
} while ((nota1 < 0 || nota1 > 10) || (nota2 < 0 || nota2 > 10) || (nota3 < 0 || nota3 > 10));

let media = (nota1 + nota2 + nota3) / 3;

console.log("A média do aluno é: " + media.toFixed(2));