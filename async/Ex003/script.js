const operacao = new Promise((resolve, reject) =>{
    let a = 2
    let b = 2

    let resultado = a * b 
    if(resultado === 4){
        resolve(resultado)
    } else {
        reject(new Error("Resultado errado!"))
    }
})

operacao.then(result => console.log(result))
.catch(error => console.log(error.mensage))
 
console.log("Bem-vindo...")

// Transformando para Async Await
async function calculo(a, b){
    let resultado = a * b
    if(resultado === 4){
        return resultado
    } else {
        throw new Error("Resultado errado!");
    }
} 

const execute = async () => {
    try {
        let result = await calculo(2, 2)
        console.log(result)
    } catch (error) {
        console.log(error.mensage)
    }
}
execute()