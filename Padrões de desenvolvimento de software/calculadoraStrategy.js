// Interface Strategy
class OperacaoStrategy {
    execute(numero1, numero2) {}
  }
  
  // Classes concretas que implementam a Strategy para realizar operações
  class SomaStrategy extends OperacaoStrategy {
    execute(numero1, numero2) {
      return numero1 + numero2;
    }
  }
  
  class SubtracaoStrategy extends OperacaoStrategy {
    execute(numero1, numero2) {
      return numero1 - numero2;
    }
  }
  
  class MultiplicacaoStrategy extends OperacaoStrategy {
    execute(numero1, numero2) {
      return numero1 * numero2;
    }
  }
  
  // Contexto que usa a Strategy
  class Calculadora {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    calcular(numero1, numero2) {
      return this.strategy.execute(numero1, numero2);
    }
  }
  
  // Exemplo de uso
  const numero1 = parseInt(prompt("Digite o primeiro número:"));
  const numero2 = parseInt(prompt("Digite o segundo número:"));
  const operacao = prompt("Digite a operação (soma, subtracao, multiplicacao):").toLowerCase();
  
  let strategy;
  
  // Definindo qual Strategy será usada com base na operação informada
  switch (operacao) {
    case 'soma':
      strategy = new SomaStrategy();
      break;
    case 'subtracao':
      strategy = new SubtracaoStrategy();
      break;
    case 'multiplicacao':
      strategy = new MultiplicacaoStrategy();
      break;
    default:
      console.log('Operação inválida.');
      break;
  }
  
  if (strategy) {
    const calculadora = new Calculadora(strategy);
    const resultado = calculadora.calcular(numero1, numero2);
    console.log(`Resultado da ${operacao}: ${resultado}`);
  }
  