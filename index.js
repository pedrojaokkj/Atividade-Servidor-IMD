const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) =>{

    if (req.url == '/'  && req.method == 'GET'){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        fs.readFile('404.html', function(err, data){
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    }

})


server.listen(8080, () =>{
    console.log('Servidor Iniciado na porta 8080')
})