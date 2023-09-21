const readline = require('readline-sync');

class Banco{
  constructor(conta,saldo,tipo, agencia){
    this.conta = conta;
    this.saldo = saldo;
    this.tipo = tipo;
    this.agencia = agencia;
  }

  
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
      let saque = this.saldo - quantiasaque;
      console.log("Aguarde a saída do dinheiro");
      console.log(`Seu saldo atual é ${saque.toFixed(2)}`);
    }
  }
  
  
  mostrarConta(){
    console.log(`O número da sua  conta é ${this.conta}`);
  }
  
}

let cliente = new Banco(32788, 6300.50,"Corrente",34552);

console.log("Bem vindo!");
console.log("1-Mostrar saldo");
console.log("2-Fazer depósito");
console.log("3-Fazer saque")
console.log("4-Mostrar conta")
let opcao = readline.question("Qual das opçoes acima deseja realiza?");

switch(opcao){
    case'1':
      cliente.mostrarSaldo();
      break;
    case'2':
      let quantiadeposito = readline.parseFloat("Digite qual valor deseja depositar: ");
      cliente.fazerDeposito(quantiadeposito);
      break;
    case'3':
      let quantiasaque = readline.parseFloat("Quanto deseja sacar:");
      cliente.fazerSaque(quantiasaque);
      break;
    case'4':
      cliente.mostrarConta();
      break;
    default:
    console.log("Numero invalido");
}