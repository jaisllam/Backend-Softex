const connection = require('../db.js');

const criarTabela = `
CREATE TABLE CLIENTE (
  id INT AUTO_INCREMENT,
  nome VARCHAR(32),
  sexo VARCHAR(1),
  idade SMALLINT,
  salario FLOAT,
  cidade CHAR(255),
  estado VARCHAR(2),
  PRIMARY KEY (id)
);
`;

connection.query(criarTabela, (err, results) => {
  if (err) throw err;
  console.log('Tabela CLIENTE criada com sucesso!');
  connection.end();
});