let nome = prompt("Qual seu nome: ");
let n1 = parseFloat(prompt("Entre com nota 1: "));
let n2 = parseFloat(prompt("Entre com nota 2: "));
let n3= parseFloat(prompt("Entre com nota 3: "));
let media = (n1+n2+n3)/3;

console.log(nome);
console.log(media);

if(media>7) 
    console.log("Aprovado por nota");
else if(media<=5 && media<=7)
    console.log("Recuperação")
else
  console.log("Reprovado")lsdjflsj
