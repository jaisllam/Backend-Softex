const connection = require('../db.js');

const inserirClientes = `
INSERT INTO CLIENTE (nome, sexo, idade, salario, cidade, estado) VALUES
('Ana Silva', 'F', 28, 4000.00, 'São Paulo', 'SP'),
('Carlos Oliveira', 'M', 35, 5500.00, 'Rio de Janeiro', 'RJ'),
('Mariana Santos', 'F', 40, 3000.00, 'Belo Horizonte', 'MG'),
('Fernando Pereira', 'M', 22, 3200.00, 'Porto Alegre', 'RS'),
('Camila Lima', 'F', 30, 4500.00, 'Salvador', 'BA'),
('Ricardo Almeida', 'M', 28, 3800.00, 'Recife', 'PE'),
('Patrícia Souza', 'F', 45, 6000.00, 'Fortaleza', 'CE'),
('Gabriel Santos', 'M', 32, 5000.00, 'Brasília', 'DF'),
('Luciana Oliveira', 'F', 27, 3500.00, 'Curitiba', 'PR'),
('José Silva', 'M', 40, 4200.00, 'Manaus', 'AM');
`;

connection.query(inserirClientes, (err, results) => {
  if (err) throw err;
  console.log('Dados inseridos com sucesso!');
  connection.end();
});