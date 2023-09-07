const express = require('express');
const app = express();
const porta = 3000;

const rotas = require('./routes');

app.use('/', rotas);


app.listen(porta,() => {
    console.log(`O servidor está rodando na porta ${porta}`);
});