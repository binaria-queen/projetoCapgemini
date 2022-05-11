const express = require('express')
const app = express()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
var pg = require('pg')
var consString = process.env.DATABASE_URL;
const login = require('./middleware/login')

const pool = new pg.Pool({ connectionString: consString, ssl: { rejectUnauthorized: false } })


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
        var sql = 'CREATE TABLE usuarios ( id serial primary key, nome varchar(100), email varchar(50), senha varchar(200), datanascimento varchar(10), gestante nchar(1),  pcd nchar(1), perfil varchar(15))'
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
                return res.status(401).send('Operaçao nao autorizada')
            }
            if (result.rowCount > 0) {
                return res.status(200).send('Registro já existe')
            }
            bcrypt.hash(req.body.senha, 10, (error1, hash) => {
                if (error1) {
                    return res.status(500).send({
                        message: "Erro de autenticação",
                        erro: error1.message
                    })
                }
                var sql = 'INSERT INTO usuarios(nome, email, senha, dataNascimento, gestante, pcd, perfil) values($1, $2, $3, $4, $5, $6, $7)'
                let values = [req.body.nome, req.body.email, hash, req.body.datanascimento, req.body.gestante, req.body.pcd, req.body.perfil]
                client.query(sql, values, (error2, result2) => {
                    if (error2) {
                        return res.status(403).send('Operaçao nao autorizada')
                    }
                    res.status(201).send('Criado com sucesso')
                })
            })
        })
    })
})
//token gestante, pcd, idoso
app.post('/usuarios/login', (req, res) => {
    pool.connect((err, client) => {
            if (err) {
                return res.status(401).send("Conexão não autorizada")
            }
            client.query('SELECT * FROM usuarios WHERE email = $1', [req.body.email], (err, result) => {
                if (err) {
                    return res.status(401).send("Operação não permitida")
                }
                if (result.rowCount > 0) {
                //criptografar a senha enviada e comparar com a recuperada no banco de dados
                bcrypt.compare(req.body.senha, result.rows[0].senha, (error, results) => {
                    if (error) {
                        return res.status(401).send({
                            message: "Falha na autenticação"
                        })
                    }
                    if (results) {
                        let token = jwt.sign({
                            email: result.rows[0].email,
                            perfil: result.rows[0].perfil
                        },
                        process.env.JWTKEY, { expiresIn: '1h'})
                        return res.status(200).send({
                            message: "Conectado com sucesso",
                            token: token
                        })
                    }
                })
                } else {
                    return res.status(200).send({
                        message: "Usuário ou senha incorretos"
                    })
                } 
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
//criptografar a senha
app.put('/usuarios/:email', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        var sql = "SELECT * FROM usuarios WHERE email = $1"
        client.query(sql, [req.params.email], (error, result) => {
            if (error) {
                return res.status(401).send('Operação não permitida')
            }
            if (result.rowCount > 0) {
                var sql = 'UPDATE usuarios SET nome=$1, senha=$2, dataNascimento=$3, gestante=$4, pcd=$5, perfil=$6 WHERE email=$7'
                let values = [req.body.nome, req.body.senha, req.body.datanascimento, req.body.gestante, req.body.pcd, req.body.perfil, req.params.email]
                client.query(sql, values, (error2, result2) => {
                    if (error2) {
                        return res.status(401).send('Operação não permitida')
                    }
                    if (result2.rowCount > 0) {
                        return res.status(200).send('Registro alterado com sucesso')
                    }
                })
            } else {
                res.status(200).send({ message: "Usuário não encontrado" })
            }
        })
    })
})



app.listen(8081, () => console.log('Aplicação em execução na url http://localhost:8081'))
