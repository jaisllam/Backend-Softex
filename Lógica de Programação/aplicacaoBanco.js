const readline = require('readline-sync');

class Banco {
  constructor(conta, saldo, tipo, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipo = tipo;
    this.agencia = agencia;
  }

<<<<<<< HEAD
  
  mostrarSaldo(){
    console.log(this.saldo.toFixed(2));
  }
  
  
  fazerDeposito(quantiadeposito){
    let depositado = this.saldo+quantiadeposito;
    console.log(depositado.toFixed(2));
  }
  
  
  fazerSaque(quantiasaque){
    if(quantiasaque>this.saldo){
      console.log("Operação não realizada. Entre com quantia adequada");
    }else{
=======
  mostrarSaldo() {
    console.log(this.saldo.toFixed(2));
  }

  fazerDeposito(quantiadeposito) {
    let depositado = this.saldo + quantiadeposito;
    console.log(depositado.toFixed(2));
  }

  fazerSaque(quantiasaque) {
    if (quantiasaque > this.saldo) {
      console.log("Operação não realizada. Entre com uma quantia adequada");
    } else {
>>>>>>> 2cec9426735a68f1da05386886a97ca9cb2b85bb
      let saque = this.saldo - quantiasaque;
      console.log("Aguarde a saída do dinheiro");
      console.log(`Seu saldo atual é ${saque.toFixed(2)}`);
    }
  }
<<<<<<< HEAD
  
  
  mostrarConta(){
    console.log(`O número da sua  conta é ${this.conta}`);
=======

  mostrarConta() {
    console.log(`O número da sua conta é ${this.conta}`);
>>>>>>> 2cec9426735a68f1da05386886a97ca9cb2b85bb
  }
}

let cliente = new Banco(32788, 6300.50, "Corrente", 34552);

console.log("Bem vindo!");
console.log("1- Mostrar saldo");
console.log("2- Fazer depósito");
console.log("3- Fazer saque");
console.log("4- Mostrar conta");
let opcao = readline.question("Qual das opções acima deseja realizar?");

switch (opcao) {
  case '1':
    cliente.mostrarSaldo();
    break;
  case '2':
    let quantiadeposito = parseFloat(readline.question("Digite qual valor deseja depositar: "));
    cliente.fazerDeposito(quantiadeposito);
    break;
  case '3':
    let quantiasaque = parseFloat(readline.question("Quanto deseja sacar:"));
    cliente.fazerSaque(quantiasaque);
    break;
  case '4':
    cliente.mostrarConta();
    break;
}
