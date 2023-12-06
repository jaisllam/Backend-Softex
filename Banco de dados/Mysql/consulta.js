const connection = require('../db.js');

// Consulta por ID
function consultarPorId(id) {
  const query = `SELECT * FROM CLIENTE WHERE id = ${id}`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log(results);
    connection.end();
  });
}

// Consulta por SEXO
function consultarPorSexo(sexo) {
  const query = `SELECT * FROM CLIENTE WHERE sexo = '${sexo}'`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log(results);
    connection.end();
  });
}

// Consulta por SALÁRIO acima de 3000
function consultarPorSalario() {
  const query = `SELECT * FROM CLIENTE WHERE salario > 3000 ORDER BY salario`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log(results);
    connection.end();
  });
}

// Testando as consultas
consultarPorId(2);
consultarPorSexo('F');
consultarPorSalario();