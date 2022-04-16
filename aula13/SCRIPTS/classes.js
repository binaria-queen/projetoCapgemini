var urlBase = "http://localhost:3000/contatos"


class Contato {
    constructor(id, nome, fone, email) {
        this.id = id
        this.nome = nome
        this.fone = fone
        this.email = email
    }


    //criando metodo salvar para chamar o fetch
    //mandando os atributos para o servidor pelo body
    //JSON stringify transforma uma string em dados
    salvar() {
        fetch(urlBase,
            {
                method: 'POST',
                body: JSON.stringify(this),
                headers: {
                    'Content-type': 'Application/json'
                }
            })
            .catch(erro => console.log(erro))
    }
    //display so esta passando a referencia por isso está sem o ()
    consultarTodos(display) {
        fetch(urlBase)
            .then(x => x.text())
            .then(data => display(data))
    }

    consultarPeloId(idcontato, display) {
        fetch(`${urlBase}/${idcontato}`)
            .then(x => x.text())
            .then(data => display(data))
    }
     //o fetch precisa da url e do id do recurso que queremos alterar
    update() { 
        fetch(`${urlBase}/${this.id}`,{
                method: 'PUT',
                body: JSON.stringify(this),
                headers:{
                    'Content-type':'Application/json'
                }
            })
          
    }
    excluir(idcontato) {
        fetch(`${urlBase}/${idcontato}`,{
            method: 'DELETE'
        })
    }
}
