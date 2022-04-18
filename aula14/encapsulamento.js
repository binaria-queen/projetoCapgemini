
//(atributos)
//_ "underline" uma convenção do js para privado
class Carro {
    constructor(placa, marca, cor) {
        this._placa = placa //a propria "indine" sabe que precisa interpretar uma string
        this._marca = marca
        this._cor = cor
    }

    get placa (){
        return this._placa
    }

    set placa(pPlaca) {
        this._placa = pPlaca
    }

    set marca(x){ // o set atribui
        this._marca = x //o parametro x poderia ser qualquer nome, mas o ideal é colocar o nome do proprio atributo
    }

    get marca(){ // o get retorna
        return this._marca
    }

    get cor (){
        return this._cor
    }

    set cor(cor) {
        this._cor = cor
    }
}

let c1 = new Carro()
c1.placa = 'abc-1234' //chamando o set
c1.marca = "Volkswagen"
c1.cor = "black"
console.log(c1.placa, c1.marca, c1.cor) // lendo o get

let c2 = new Carro()
c2.placa = 'abd-2345'
console.log(c2.placa)