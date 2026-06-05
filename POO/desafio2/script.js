const name = prompt("Digite o nome do produto:")
const description = prompt("Descrição do produto:")
const price = Number(prompt("Preço do produto:")) // Vai converter o texto que o usuário colocar em número

class Product{
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
        addToStock(quantity){
            this.inStock += quantity
    }
        calculateDiscount(discountPercentage){
            return this.price - (this.price * discountPercentage / 100)
        }

    productData(){
        alert(`Nome: ${this.name}
Descrição: ${this.description}
Preço: ${this.price}
Estoque: ${this.inStock}`)
    }
}

const product1 = new Product(name, description, price)

const quantity = Number(prompt("Digite a quantidade para adicionar ao estoque:"))
product1.addToStock(quantity)
product1.productData()

const discount = Number(prompt("Digite a porcentagem de desconto:"))
alert(`Preço com desconto: ${product1.calculateDiscount(discount)}`)