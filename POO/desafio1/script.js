const nome = prompt("Digite seu nome:")
const email = prompt("Digite seu email:")
const password = prompt("Digite sua senha:")

class Pessoa {
    constructor(nome, email, password){
        this.nome = nome
        this.email = email
        this.password = password
    }
    dadosPessoa(){
    alert(`Nome: ${this.nome}
Email: ${this.email}
Senha: ${this.password}`)
   }

   login(email, password){
        if(this.email == email && this.password == password){
            alert("Login bem sucedido!")
        } else { 
            alert("Login inválido!")
        }

   }
}
const pessoa1 = new Pessoa(nome, email, password)
pessoa1.dadosPessoa()

const emailLogin = prompt("Digite seu email novamente:")
const passwordLogin = prompt("Digite sua senha novamente:")

pessoa1.login(emailLogin, passwordLogin)


 