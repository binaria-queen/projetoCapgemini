var http = require('http')
var add = require('./funcoes/funcoes')

http.createServer(function(req, res) {
    let z = add.soma(40, 20)
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(`${z}`)
    res.end()
    console.log("Servidor rodando")
}).listen(8080);