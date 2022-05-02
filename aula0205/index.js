const express = require('express')
const app = express()

var dados = require('./db')
//esse middleware so vai aceitar o json 
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// o acesso ao backend é sempre feita por esse app '/': caminho
app.get('/', (req, res) => {
    res.send("Olá mundo!")
})
//nova rota criada: /contatos
app.get('/contatos', (req, res) => {
    res.send("Serviço de contato")
})

app.get('/contatos/:idcontato', (req, res) => {
    let idcontato = req.params.idcontato
    res.status(200).send({ idcontato: idcontato })
})

app.post('/contatos', (req,res) => {
    res.status(201).send(
    {
        id: '1',
        nome: 'Maria',
        fone: '123-234',
        email: 'maria@gmail.com'
    })
})

/**PEGAR Clientes */

app.get('/clientes', (req,res) => {
    res.status(201).send(dados)
})

//para consultar um cliente específico *****
app.get('/clientes/:idclientes', (req, res) => {
    let idclientes = req.params.idclientes;
    let clienteretornar = {}
    for(let i of dados){
        if(i.id === idclientes){
            clienteretornar = i
        }
    }
    res.status(200).send(clienteretornar)
});

//para cadastrar novo cliente: inserir o objeto que mandei pela requisição*******
app.post('/clientes', (req, res) => {
    let obj = {
        id: req.body.id,
        nome: req.body.nome,
        fone: req.body.fone,
        limiteCredito: req.body.limiteCredito
    }
    dados.push(obj)
    res.status(201).send(obj)
})

//para excluir clientes *******
app.delete('/clientes/:idclientes', (req, res) => {
    let idclientes = req.params.idclientes
    let posicao = 0
    for(let i of dados){
        if(i.id == idclientes) {
            break;
        posicao++;
        }
    }
    dados.splice(posicao, 1)
    res.status(204).send();
})


//para alterar os dados dos clientes *******
app.put('/clientes/:idclientes', (req, res) => {
    let idclientes = req.params.idclientes
    let clienteAlterado = {}
    for(let i of dados){
        if(i.id == idclientes){
            i.nome = req.body.nome
            i.fone = req.body.fone
            i.limiteCredito = req.body.limiteCredito
            clienteAlterado = i
        }
        
    }
    res.status(200).send(clienteAlterado)
});


app.delete('contatos/idcontato', (req, res) => {
    let idcontato = req.params.idcontato
    res.status(204).send();
})


//rota criada: dentro do recurso tem um objeto com um id
app.post('/produtos', (req, res) => {
    res.status(201).send({
        id: req.body.id,
        descricao: req.body.descricao,
        preco: req.body.preco,
        estoque: req.body.estoque
    })
})

app.put('/produtos/:idproduto', (req, res) => {
    let idproduto = req.params.idproduto
    res.status(202).send({
        id: req.body.id,
        descricao: req.body.descricao,
        preco: req.body.preco,
        estoque: req.body.estoque,
        alterado: idproduto
    })
})
//ouvir na porta 8081 e uma função callback para visualizar 
app.listen(8081, () => console.log('Aplicação em execução na url http://localhost:8081'))

