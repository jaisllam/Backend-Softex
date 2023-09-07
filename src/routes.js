const express = require('express');
const app = express.Router();

app.get('/exemplo', (req,res) => {
    res.send("Comer é bom");
});
app.get('/outracoisa', (req,res) => {
    res.json({mensagem:"pegar  outra coisa", texto: "texto aqui"});
});

module.exports = app;