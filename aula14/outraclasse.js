class Agenda {
    constructor(data, hora, descricao, contato) {
        this.data = data
        this.hora = hora
        this.descricao = descricao
        this.contato = contato
    }
    //metodo display que está lendo o conteúdo do objeto agenda -> [atributos], so posso acessar a partir de um objeto: nesse caso o registro
    display() {
        console.log(`
        Data: ${this.data} 
        Hora: ${this.hora} 
        Descrição: ${this.descricao} 
        Contato: ${this.contato}`)
    }
}
//instancia objeto
let registro = new Agenda('10/02/2022', '14:00', 'Fazer crochê', 'Maria')




let registro2 = new Agenda()
registro2.display()