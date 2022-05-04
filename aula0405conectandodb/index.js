const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


var pg = require('pg')
var consString = "postgres://zkzxqnoffphrpx:1d73cf7068e8154436d7e671b35014b9747c9a71b3a8e4605fdcba4dbe85643e@ec2-34-201-95-176.compute-1.amazonaws.com:5432/dblkktlh761lkc"

//objeto pool
const pool = new pg.Pool({ connectionString: consString, ssl: { rejectUnauthorized: false } })

app.get('/', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada.')
        }
        res.status(200).send('Conectado com sucesso!')
    })
})

/**create table usuarios (email varchar(50), senha varchar(200), perfil do usuário varchar(15)) */
app.get('/criartabelausuario', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        var sql = 'create table usuarios (email varchar(50), senha varchar(200), perfil varchar(15))'
        client.query(sql, (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }
            res.status(200).send(result.rows)
        })
    })
})

/**insert into usuarios(email,senha,perfil)values($1,$2,$3) */
/**[insert into usuarios(email,senha,perfil)values($1,$2,$3)] */
/**insert into usuarios(email,senha,perfil)values(req.body.email,req.body.senha,req.body.perfil)*/
/*app.post('/usuario', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        var sql = 'insert into usuarios(email, senha, perfil) values ($1,$2,$3)'
        client.query(sql, [req.body.email, req.body.senha, req.body.perfil], (error, result) => {
            if (error) {
                return res.status(403).send('Operação não permitida')
            }

            res.status(201).send(result.rows)
        })
    })
})*/

//consultar se o email já existe no banco de dados
app.post('/usuario', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        client.query('select * from usuarios where email = $1', [req.body.email], (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }

            if (result.rowCount > 0) {
                return res.status(200).send('Registro já existe')
            }

            var sql = 'insert into usuarios(email, senha, perfil) values ($1,$2,$3)'
            client.query(sql, [req.body.email, req.body.senha, req.body.perfil], (error, result) => {
                if (error) {
                    return res.status(403).send('Operação não permitida')
                }
                res.status(201).send({
                    mensagem: 'criado com sucesso',
                    status: 201
                })
            })
        })
    })
})
//excluir um usuario especifico por email 
app.delete('/usuario/:email', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        client.query('delete from usuarios where email = $1', [req.params.email], (error, result) => {
            if (error) {
                return res.status(401).send('operação não autorizada')
            }
            res.status(200).send({ message: 'Registro excluído com sucesso' })
        })
    })
})

app.get('/usuario', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            res.status(401).send('Conexão não autorizada')
        }
        client.query('select * from usuarios', (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }
            res.status(200).send(result.rows)
        })
    })
})





app.listen(8081, () => console.log('Aplicação em execução na url http://localhost:8081'))