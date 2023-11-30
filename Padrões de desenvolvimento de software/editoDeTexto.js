// Implementação do padrão Observer
class Observer {
    constructor() {
      this.observers = [];
    }
  
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    unsubscribe(observer) {
      this.observers = this.observers.filter(subscriber => subscriber !== observer);
    }
  
    notify(data) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
  
  // Classe Editor que serve como Subject
  class Editor extends Observer {
    constructor() {
      super();
      this.lines = [];
    }
  
    insertLine(lineNumber, text) {
      this.lines.splice(lineNumber - 1, 0, text);
      this.notify();
    }
  
    removeLine(lineNumber) {
      this.lines.splice(lineNumber - 1, 1);
      this.notify();
    }
  }
  
  // Subclasse TextEditor que estende Editor
  class TextEditor extends Editor {
    constructor() {
      super();
      this.subscribe(this); // Assinando a si mesmo para receber notificações
    }
  
    update() {
      console.log('Conteúdo Atualizado:');
      this.lines.forEach((line, index) => {
        console.log(`${index + 1}: ${line}`);
      });
    }
  
    open() {
      console.log('Evento "open" disparado.');
    }
  
    save() {
      console.log('Evento "save" disparado. Conteúdo salvo no arquivo.');
    }
  }
  
  // Exemplo de uso
  const textEditor = new TextEditor();
  textEditor.open();
  
  console.log('Insira linhas de texto. Digite "EOF" para encerrar:');
  let lineNumber = 1;
  let userInput = '';
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.on('line', (input) => {
    if (input.toLowerCase() === 'eof') {
      rl.close();
      textEditor.save();
    } else {
      textEditor.insertLine(lineNumber++, input);
    }
  });
  
  rl.on('close', () => {
    process.exit(0);
  });
  