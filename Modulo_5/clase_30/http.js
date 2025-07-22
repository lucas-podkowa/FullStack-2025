import http from 'http';

http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.write('Bienvenido al Servidor');
        return res.end();
    }

    if (req.url === '/compras') {
        res.write('Bienvenido a la pagina de compras');
        return res.end();
    }

    if (req.url === '/perfil' && req.method === 'GET') {
        res.statusCode = 200
        res.end('Este es mi perfil')
    }

    // if (req.url === '/' && req.method === 'GET') {
    //     res.statusCode = 200
    //     res.end('Mi primer pagina con Node.js sin Express')
    // } else if (req.url === '/perfil' && req.method === 'GET') {
    //     res.statusCode = 200
    //     res.end('Este es mi perfil')
    // } else {
    //     res.statusCode = 404
    //     res.end('Has ingresado una URL sin procesamiento')
    // }


    res.end();
}).listen(3000);

console.log(`Servidor escuchando en el puerto 3000`)