//array(matriz) de objetos
let pessoas = [
    {nome: "Paulo", idade: 23, profissão:"Pedreiro", cidade: "Mossoró"},
    {nome: "Angelica", idade: 19, profissão:"Atendente", cidade: "Natal"},
    {nome: "Clara", idade: 56, profissão:"Professora", cidade: "João Pessoa"}
]    

//impressão de posição dos dados
for (let pessoa of pessoas){
    console.log(pessoa);
    for (let propriedade in pessoa){
        console.log(propriedade + " : " + pessoa[propriedade]);
    }
}