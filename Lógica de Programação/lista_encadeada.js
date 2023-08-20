class Pessoa{
    constructor(nome,idade){
      this.nome = nome;
      this.idade = idade;
      this.filho = null;
    }
  }
  
  let familia = [
    new Pessoa("Alice", 64),//aqui é todo um elemento 0
    new Pessoa("Joaquim", 33),
    new Pessoa("Kelly", 3)
  ]
  familia[0].filho = familia[1] //atribuir oobjeto com o nome joaquim ao objeto com o nome de alice
  familia[1].filho = familia[2]
  
  console.log(familia)  