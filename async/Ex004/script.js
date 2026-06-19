async function user() {
    let usuario = {
        id: 1,
        nome: "nick"
    }
    if(usuario.id){
        return usuario
    } else{
        throw new Error("Não existe usúario cadastrado");
    }
}

const requitar =  async() => {
    try {
    const existUser = await user()
    console.log(`
            Dados:
        Id: ${existUser.id}
        Nome: ${existUser.nome}
        `)
    } catch (error) {
        console.log(error.mensage)
    }
}
requitar()