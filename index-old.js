const http = require('http');



const server = http.createServer((req, res)=>{

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type':'application/csv'})

    

    res.write('hola mundo');

    res.end();

})

server.listen(5000);

console.log('Escuchando puerto ', 5000);