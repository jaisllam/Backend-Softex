const readline = require('readline-sync');


class SistemaSegurança{
    //não passa parametro pois ela já existe
    constructor(){
        this.senha = "BaseSecreta_@1";
        
    }

    //se não existir instancia cria uma nova com a class
    createInstance(){
        if(!this.constructor.instance){
            this.constructor.instance = new this.constructor();
        
        }

        return this.constructor.instance;
    }

    
    acessarBaseSecreta(senhaInserida){
        if(this.senha !== senhaInserida){
            console.log("Acesso negado");
        }else{
            console.log("Acesso permitido"); 
        }

    }

}


console.log("Bem vindo");

let senhaInserida = readline.question("Insira a senha para ter acesso:");

// cria uma instância da classe antes de chamar o método "acessarBaseSecreta".
const agenteSecreto = new SistemaSegurança().acessarBaseSecreta(senhaInserida);
