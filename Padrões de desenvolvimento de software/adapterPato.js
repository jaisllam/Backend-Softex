// Interface 
class Pato{
    ruido(){
        console.log("Quack, Quack!")
    }
    baterAsas(){
        console.log("Batendo assas como um pato")
    }
}

class Galinha{
    ruido(){
        console.log("Có, có, có!")
    }
    baterAsas(){
        console.log("Batendo assas como uma galinha")
    }
}

// Adaptador onde o pato será usado como galinha
class AdaptadorPato{
    constructor(pato){
        this.pato = pato;
    }

    ruido(){
        this.pato.ruido();
    }
    baterAsas(){
        this.pato.baterAsas();
    }
}

class AdaptadorPatoDemo{
    static main(){
        const pato = new Pato();
        const adaptadorPato = new AdaptadorPato(pato);

    console.log("Pato com sons de Galinha:");
    adaptadorPato.ruido();

    console.log("\nPato batendo asas como Galinha:");
    adaptadorPato.baterAsas();
  }
}

// Executando a demonstração
AdaptadorPatoDemo.main();


