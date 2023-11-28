class Sanduiche {
    cost() {
        return 1;
    }

    getDescription() {
        return 'Sanduíche de';
    }
}

class FrangoAssado extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    cost() {
        return this.sanduiche.cost() + 3.50;
    }

    getDescription() {
        return `${this.sanduiche.getDescription()}, com frango assado`;
    }
}

class Pepperoni extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    cost() {
        return this.sanduiche.cost() + 0.99;
    }

    getDescription() {
        return `${this.sanduiche.getDescription()}, pepperoni`;
    }
}

class QueijoMussarelaRalado extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    cost() {
        return this.sanduiche.cost() + 2.00;
    }

    getDescription() {
        return `${this.sanduiche.getDescription()}, queijo mussarela ralado`;
    }
}

class Carne extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    cost() {
        return this.sanduiche.cost() + 2.97;
    }

    getDescription() {
        return `${this.sanduiche.getDescription()}, carne`;
    }
}

class Bacon extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    cost() {
        return this.sanduiche.cost() + 1.52;
    }

    getDescription() {
        return `${this.sanduiche.getDescription()}, bacon`;
    }
}

let meuSanduiche = new Sanduiche();

meuSanduiche = new Carne(meuSanduiche);
meuSanduiche = new Bacon(meuSanduiche);
meuSanduiche = new QueijoMussarelaRalado(meuSanduiche);

console.log(`${meuSanduiche.getDescription()} custa ${meuSanduiche.cost().toFixed(2)}.`);
