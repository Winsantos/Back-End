const titulo = document.getElementById("titulo")
const nome = document.getElementById("nome")
const codigo = document.getElementById("codigo")
const codigoCadastrado = document.getElementById("codigoCadastrado")
const nomeCadastrado = document.getElementById("nomeCadastrado")
const enviar = document.getElementById("enviar")

class Reserva{
    constructor(tituloLivro, nomeAluno, codigoReserva){
        this.tituloLivro = tituloLivro
        this.nomeAluno = nomeAluno
        this.codigoReserva = codigoReserva
    }

    validarLivro(){
    if(this.tituloLivro.trim() === "")
        throw new Error("Não pode estar vazio.");
    
    }
    validarAluno(){
    if(this.nomeAluno.trim() === "")
        throw new Error("Precisa haver o nome do aluno");
    }
    validarCodigo(){
        if(this.codigoReserva.trim() === ""){
        throw new Error("Adicione o código de reserva");
    }
        if(this.codigoReserva.length !== 5){
        throw new Error("Deve possuir apenas 5 caracteres");
    }
        if(isNaN(this.codigoReserva)){
        throw new Error("O campo deve conter apenas números");
        
    }
}
    validation(){
        this.validarLivro()
        this.validarAluno()
        this.validarCodigo()
        }
}

enviar.addEventListener("click", () =>{
        try {
        const reserva = new Reserva(
            titulo.value, 
            nome.value, 
            codigo.value
        )
            reserva.validation()
    
            let array = []
            array.push({
                nomeAluno:nomeAluno,
                codigoReserva:codigoReserva
            })
    
            alert("Reserva realizada com sucesso!")
            
           const autentication = new Promise((resolve, reject)=>{
                if(codigoCadastrado !== array[0].codigo || nomeCadastrado !== array[0].nome){
                    reject(new Error("Dados da reserva inválidos!"));
                    } else {
                        resolve("Retirada efetuada com sucesso!")
                }
                })
                
                autentication.then(result => alert(result))
                .catch(error => alert(error.message))
            }catch (error) {
                alert(error.message)
            }
        })
