const readline = require ('readline-sync');

let result;
let firstEntry = readline.questionInt("Entre com o primeiro número: ");
let secondEntry = readline.questionInt("Entre com o primeiro número: ");

try {
    result = (firstEntry / secondEntry);
    if(result === Infinity || result === undefined || result === NaN)
        throw new Error()
} catch(err) {
    result = "Falha ao realizar calculo.";
} finally {
    console.log(`Resultado: ${result}`);
}