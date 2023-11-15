class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        return new Veiculo(this.modelo, this.marca, this.cor, this.numeroRodas);
    }

    represent() {
        console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de rodas: ${this.numeroRodas}`);
    }
}

class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas, velocidade) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
        this.velocidade = velocidade;
    }

    // Corrigindo o nome da classe no método clone
    clone() {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas, this.velocidade);
    }
}

class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, cilindradas) {
        super(modelo, marca, cor, numeroRodas);
        this.cilindradas = cilindradas;
    }

    // Corrigindo o nome da classe no método clone
    clone() {
        return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
    }
}

class Aplicacao {
    constructor() {
        this.arrayVeiculos = [];
    }

    criarVeiculos() {
        const carro1 = new Carro('Sedan', 'Toyota', 'Azul', 4, 4, 2.0);
        const carro2 = new Carro('Celta', 'Chevrolet', 'Prata', 4, 2, 1.0);
        const carro3 = new Carro('Esportivo', 'Ferrari', 'Vermelho', 4, 2, 2.0);
        const moto1 = new Moto('Street', 'Yamaha', 'Preto', 2, 120);
        const moto2 = new Moto('Custom', 'Harley-Davidson', 'Cinza', 2, 350);
        const moto3 = new Moto('Esportiva', 'Kawasaki', 'Verde', 2, 250);

        this.arrayVeiculos.push(carro1, carro2, carro3, moto1, moto2, moto3);
    }

    clonarVeiculos() {
        // Corrigindo a chamada do método clone e removendo o uso de Veiculo.clone
        const veiculosClonados = this.arrayVeiculos.map(veiculo => veiculo.clone());
        return veiculosClonados;
    }
}

const app = new Aplicacao();
app.criarVeiculos();
const veiculosClonados = app.clonarVeiculos();

console.log("Veiculos iniciais: ");
app.arrayVeiculos.forEach(veiculo => veiculo.represent());
console.log("------------------");
console.log("Veiculos Clonados: ");
veiculosClonados.forEach(veiculo => veiculo.represent());
