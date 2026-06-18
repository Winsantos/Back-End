// Simulação 
let nome = prompt("Nome:")
let senha = prompt("Senha:")

class User{
    construtor(nome,senha){
        this.nome = nome
        this.senha = senha
    }
    validarNome(){
        if(this.nome.trim() === ""){
            throw new Error("Precisa haver um nome cadastrado."); 
        }
    }
     validarSenha(){
            if(this.senha.trim() === ""){
                throw new Error("Precisa haver uma senha cadastrada");
            }

            if(this.senha.lenght !== 4){
                throw new Error("A senha deve possuir 4 digitos");
            }

            if(isNaN(this.senha)){
                throw new Error("O campo deve conter apenas números.");        
            }
        }
        validation(){
            this.validarNome()
            this.validarSenha()
        }
}

try {

const user1 = new User(nome, senha)
    user1.validation()

    let array = []
    array.push({
        nome:nome,
        senha:senha
    })

    alert("Cadastro realizado com sucesso!")

    let nomeCadastrado = prompt("Login:")
    let senhaCadastrada = prompt("Senha:")

    // Criando Promise
const autentication = new Promise((resolve, reject)=>
{
    if(nomeCadastrado !== array[0].nome || senhaCadastrada !== array[0].senha){
        reject(new Error("Usuario e senha não correspondente"))
    } else {
        resolve("Login efetuado com secesso!")
    }
})

// Chamada da Promise
    autentication.then(result => alert(result))
    .catch(error => alert(error.message))

} catch (error) {
    alert(error.message)
}