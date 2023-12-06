const express = require('express');
const router = express.Router();
const { consultarPorId, consultarPorSexo, consultarPorSalario } = require('./comandos/consultas.js');

router.get('/cliente/:id', (req, res) => {
  const id = req.params.id;
  consultarPorId(id, res);
});

router.get('/clientes/:sexo', (req, res) => {
  const sexo = req.params.sexo;
  consultarPorSexo(sexo, res);
});

router.get('/clientes/salario', (req, res) => {
  consultarPorSalario(res);
});

module.exports = router;