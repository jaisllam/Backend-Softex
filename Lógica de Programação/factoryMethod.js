class Computador {
    getRam() {}
    getCPU() {}
    getHDD() {}
    getType() {}
    toString() {}
}

class PC extends Computador {
    getRam() {
        return "Ram: 16GB";
    }
    getCPU() {
        return "CPU: 2.4GHz";
    }
    getHDD() {
        return "HDD: 500GB";
    }
    getType() {
        return "PC";
    }
    toString() {
        return this.getType() + " -> " + this.getRam() + ', ' + this.getCPU() + ', ' + this.getHDD();
    }
}

class Server extends Computador {
    getRam() {
        return "Ram: 32GB";
    }
    getCPU() {
        return 'CPU: 8GHz';
    }
    getHDD() {
        return "HDD: 1000GB";
    }
    getType() {
        return "Server";
    }
    toString() {
        return this.getType() + " -> " + this.getRam() + ', ' + this.getCPU() + ', ' + this.getHDD();
    }
}

class ComputerFactory {
    createComputador(type) {
        switch (type) {
            case 'PC':
                const pc = new PC();
                console.log(pc.toString());
                break;
            case 'Server':
                const server = new Server();
                console.log(server.toString());
                break;
            default:
                console.log('Tipo inválido de computador');
        }
    }
}

const computerFactory = new ComputerFactory();

computerFactory.createComputador('PC');
computerFactory.createComputador('Server');
computerFactory.createComputador('Notebook');
