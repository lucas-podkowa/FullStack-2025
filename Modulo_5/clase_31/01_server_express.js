import express from 'express';
let server = express();

//endpoint digamos que es la ruta o el caminito a travz del cual ejecutamos distitas acciones

//-------------------------------------------------------------------------

//enpoint sencillo
// server.get('/', (req, res) => {
//     //aca ejecuto lo que quiero
//     res.write('<h1>estoy en la pagina principal</h1>');
//     res.write('<h4> wara wara </h4>');
//     console.log('estoy en la pagina principal');
//     res.end();

// });

//-------------------------------------------------------------------------
server.get('/', (req, res) => {
    res.status(204).end('estoy en la pagina soy un texto enviado con end');
});

server.get('/vivo', function (req, res) {
    res.sendStatus(204);
})

/*
FRONT   
    fetch - axios - jquery
    http://sitio_api:8080/categores/products/prices({precio = 1500})


BACK (sitio_api:8080)
    endpoint --> app.put('/categores/products/prices', () => 
        {
        //actualizo la base de datos){precio = 1500}
        --> res.end('ok aca ta tu precio pues');
        }
*/

server.get('/home', (req, res) => {
    res.status(200).json('{"autor": "Lucas"}')
});

server.listen(8080, () => { console.log(`servidor escuchando en: http://localhost:8080/`) });