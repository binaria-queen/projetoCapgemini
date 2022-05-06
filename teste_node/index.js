const express = require('express')
const app = express()
var cors = require('cors')

var pg = require('pg')
var consString = "postgres://mmjlwclmvgfjxk:05cc991fb507717dcc31a1120dc2f513e1f6612ae5c13e6471c848f240dbbc1e@ec2-44-196-223-128.compute-1.amazonaws.com:5432/d19jfnmkuu8rsf"

const pool = new pg.Pool({ connectionString: consString, ssl: { rejectUnauthorized: false } })

//var dados = require('./dbusuarios')
//esse middleware so vai aceitar o json 
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

//pegar os usuários
app.get('/usuarios', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send("Conexão não autorizada")
        }
        client.query('SELECT * FROM usuarios', (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }
            res.status(200).send(result.rows)
        })
    })
})

app.get('/criartabelausuarios', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        var sql = 'CREATE TABLE usuarios ( id numeric, nome varchar(100), email varchar(50), senha varchar(200), datanascimento varchar(10), gestante nchar(1),  pcd nchar(1), perfil varchar(15))'
        client.query(sql, (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }
            res.status(200).send(result.rows)
        })
    })
})

//cadastrar novos usuários
app.post('/usuarios', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexao nao autorizada')
        }
        var sql = 'SELECT * FROM usuarios WHERE email = $1'
        client.query(sql, [req.body.email], (error, result) => {
            if (error) {
                return req.status(401).send('Operaçao nao autorizada')
            }
            if (result.rowCount > 0) {
                return res.status(200).send('Registro já existe')
            }
            var sql = 'INSERT INTO usuarios(id, nome, email, senha, dataNascimento, gestante, pcd, perfil) values($1, $2, $3, $4, $5, $6, $7, $8)'
            let values = [req.body.id, req.body.nome, req.body.email, req.body.senha, req.body.datanascimento, req.body.gestante, req.body.pcd, req.body.perfil]
            client.query(sql, values, (error2, result2) => {
                if (error2) {
                    return res.status(401).send('Operaçao nao autorizada')
                }
                res.status(201).send('Criado com sucesso')
            })
        })

    })
})

app.delete('/usuarios/:email', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        client.query('DELETE FROM usuarios WHERE email = $1', [req.params.email], (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }
            res.status(200).send('Registro excluído com sucesso')
        })
    })
})

app.put('/usuarios/:email', (req,res) => {
    pool.connect((err, client) => {
        if(err) {
            return res.status(401).send('Conexão não autorizada')
        }
        var sql = "SELECT * FROM usuarios WHERE email = $1"
        client.query(sql, [req.params.email], (error, result) => {
            if(error) {
                return res.status(401).send('Operação não permitida')
            }
            if(result.rowCount > 0) {
                var sql = 'UPDATE usuarios SET id=$1, nome=$2, senha=$3, dataNascimento=$4, gestante=$5, pcd=$6, perfil=$7 WHERE email=$8'
                let values = [req.body.id, req.body.nome, req.body.senha, req.body.datanascimento, req.body.gestante, req.body.pcd, req.body.perfil, req.params.email]
                client.query(sql, values, (error2, result2) => {
                    if(error2) {
                        return res.status(401).send('Operação não permitida')
                    }
                    if(result2.rowCount > 0){
                        return res.status(200).send('Registro alterado com sucesso')
                    }
                })
            }else{
                res.status(200).send({message: "Usuário não encontrado"})
            }
        })
    })
})



app.listen(8081, () => console.log('Aplicação em execução na url http://localhost:8081'))
