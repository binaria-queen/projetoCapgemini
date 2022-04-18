class PessoaFisica {
    constructor(nome, cpf) {
        this.nome = nome
        this._cpf = cpf
    }

    get cpf(){ // o get retorna
        return this._cpf
    }

    set cpf(value){ // o set atribui
        if(value.length == 14){
            this._cpf = value
        }else{
            console.log('cpf invalido')
        }
    }

}


let p1 = new PessoaFisica()
p1.cpf = '123.345.234-12'
console.log(p1.cpf)