const express = require('express')
const app = express()
var cors = require('cors')

var dados = require('./dbvagas')
//esse middleware so vai aceitar o json 
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cors())

//pegar as vagas
app.get('/vagas', (req, res) =>{
    res.status(200).send(dados)
})

//cadastrar novos usuários
app.post('/vagas', (req, res) => {
    let obj = {
        id: dados.length + 1,
        nome: req.body.nome,
        tipo: req.body.tipo,
        ocupado: req.body.ocupado,
       
    }
    dados.push(obj)
    res.status(201).send(obj)
})

app.put('/vagas/:idvagas', (req, res) => {
    let idvagas = req.params.idvagas
    let vagasAlterado = {}
    for(let vagas of dados){
        if(vagas.id == idvagas){
            vagas.nome = req.body.nome
            vagas.tipo = req.body.tipo
            vagas.ocupado = req.body.ocupado
            vagasAlterado = vagas
            break;
    }
    res.status(200).send(vagasAlterado)
    }
})

//consultar por ID
app.get('/vagas/:idvagas', (req, res) => {
    let idvagas = req.params.idvagas
    let vagasRetornar = {}
    for(let vagas of dados){
        if(vagas.id == idvagas){
            vagasRetornar = vagas
        }
    }
    res.status(200).send(vagasRetornar);
})

//excluir usuario
app.delete('/vagas/:idvagas', (req, res) => {
    let idvagas = req.params.idvagas
    let posicao = 0
    for(let i of dados){
        if(vagas.id == idvagas){
            break;
        }
        posicao++;
    }
    dados.splice(posicao, 1)
    res.status(204).send();
})





app.listen(8081, () => console.log('Aplicação em execução na url http://localhost:8081'))
