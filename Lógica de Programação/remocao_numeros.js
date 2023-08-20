// Fila- retira o primeiro do array 
let fila = [3, 7, 9, 1, 0]

console.log("Funcionamento da fila:")
for(let i=0; i<=4; i++){
  fila[i]
  fila.shift()
  console.log(fila)
}

//lista - remove o ultimo da lista

let lista = [3, 7, 9, 1, 0]

console.log("###################")
console.log('Funcionamento da lista: ')
while(lista.length>0){
  const indice = lista.length-1
  lista.splice(indice,1)
  console.log(lista)
}

//Pilha - ele retira o ultimo da pilha
console.log("###################")
console.log('Funcionamento da pilha: ')

let pilha = [3, 7, 9, 1, 0]
for(let i = 0;i<=4; i++){
  pilha.pop()
  console.log(pilha)
}