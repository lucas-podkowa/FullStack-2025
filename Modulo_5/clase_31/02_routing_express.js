import express from 'express';
const app = express();

//use es un método de Express que registra middleware, es decir, funciones que se ejecutan antes de que una solicitud llegue a tus rutas definidas.
app.use(express.text());
app.use(express.json());

//esto es para que express pueda entrnder que los datos vienen de un formulario y los pueda procesar
app.use(express.urlencoded({ extended: true }));

/*"Por favor, analiza automáticamente los datos enviados desde formularios HTML (en formato application/x-www-form-urlencoded), y conviértelos en un objeto accesible desde req.body. Y además, permití que esos datos sean objetos anidados (no solo strings simples)."*/


app.get('/', (req, res) => {
    res.send("Mi primer página con express");
});

app.get('/perfil', (req, res) => {
    res.send("Este es mi perfil");
});

app.get('/api/prueba', function (req, res) {

    res.send("Realizo un get");
});
app.post('/api/prueba', function (req, res) {
    console.log(req.body);

    //esto es programacion clasica de JS
    let mail = req.body.mail;
    let telefono = req.body.phoneNumber;

    console.log(`El mail es: ${mail} y el telefono es: ${telefono}`);

    res.send("Realizo un post");
});
app.put('/api/prueba', function (req, res) {
    res.send("Realizo un put");
});
app.delete('/api/prueba', function (req, res) {
    res.send("Realizo un delete");
});


app.listen(8080, () => {
    console.log("Servidor escuchando en http://localhost:8080");
});


//wara wara