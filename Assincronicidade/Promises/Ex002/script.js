// Estrutura de funções
function user(){
    return new Promise((resolve, reject)=>{
        resolve({
            id:1,
            nome:"nick"
        })
    })
    
}
function pedidos(idUsuario){
    return new Promise((resolve, reject)=>{
        resolve([
            "notebook",
            "Placa de Vídeo - RX6600"
        ])
    })
}

user()
    .then(usuario => {
        console.log(`Usuario: ${usuario.id}`)
        return pedidos(usuario.nome)
}).then(pedidos => {
        console.log(`Pedidos: ${pedidos}`)
}).then(result => console(result))
.catch(error => console.log.message)