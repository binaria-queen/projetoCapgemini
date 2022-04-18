var http = require('http')
var fs = require('fs') //para ler o arquivo

http.createServer(function(req, res) {
    //res.end('olá mundo')
   /* fs.readFile('cadastro.html',
        function(err, data) {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data)
            return res.end()
        }
    )*/
    res.end("<h1> Olá mundo </h1>")
    console.log("Servidor rodando")
}).listen(8080)