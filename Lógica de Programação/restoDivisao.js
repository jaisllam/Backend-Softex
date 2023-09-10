const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entre com o primeiro número: ", function(num1Input) {
  const num1 = parseFloat(num1Input);

  rl.question("Entre com o segundo número: ", function(num2Input) {
    const num2 = parseFloat(num2Input);

    rl.question("Entre com qual operação deseja +, -, *, /, ** : ", function(operacao) {
      switch (operacao) {
        case '+':
          console.log(num1 + num2);
          break;
        case '-':
          console.log(num1 - num2);
          break;
        case '*':
          console.log(num1 * num2);
          break;
        case '/':
          console.log(num1 / num2);
          if (num1 % num2 !== 0)
            console.log(`Resto da divisão é ${num1 % num2}`);
          break;
        case '**':
          console.log(num1 ** num2);
          break;
        default:
          console.log("Operação inválida");
          break;
      }

      rl.close();
    });
  });
});
