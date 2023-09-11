let cadastrados = [
    {login:'Paulo', senha: '34H0_' },
    //objeto generico(usuario), ñ é class, atributo/strings é o login e senha login é atributo.
    {login: 'Clara', senha: '2r#354'}
  ]
  
  function cadastrarUsuario(login, senha){ 
    //login e senha 2 strings
    var usuarioEncontrado = false;
   // quebra o forEach com return pois usuario encontrado
    cadastrados.forEach((usuario) => {
      if(usuario.login == login){
        usuarioEncontrado = true;
        return;
      }
    });
    if(usuarioEncontrado){
      return console.log("Usuário já cadastrado");
    }  
    
    cadastrados.push({login: login, senha: senha});
    return console.log("Usuario cadastrado com sucesso!");
  }
  
  function fazerLogin(login,senha){
    var usuariologado = false;
    
    cadastrados.forEach((usuario) => {
      if(usuario.login == login && usuario.senha == senha){
         usuariologado = true;
        return;
       }
      if(usuariologado){
        console.log("Usuario logado com sucesso!");
      }else{
        return console.log("Usuario ou senha incorreta");
      }  
    });
  }
  console.log("Bem vindo! Selecione uma das opções abaixo:")
  var opcao = Number(prompt("1-Fazer login, 2-Fazer cadastro"));
  var login = prompt("Digite seu nome: ");
  var senha = prompt("Digite a senha a ser utilizada: ")
  console.log("--------------------------");
  
  if(opcao == 1){
    fazerLogin(login,senha)
  }else{
  cadastrarUsuario(login,senha);
  console.log(cadastrados)
  }