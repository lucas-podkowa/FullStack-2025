import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware buchon, lo unico que hace es imprimir por consola datos sobre el metodo y la url que utilizó el cliente
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// Middleware para validar el token
app.use((req, res, next) => {
    if (req.query.token === "12345") {
        console.log("Token válido, usuario autorizado");
        next();
    } else {
        res.status(403).send("Token inválido");
    }
});


//--------------------------------------------------------------
//---------------------  req.params  ---------------------------

// ruta donde utilizamos un req.params llamado userName
app.get('/usuarios/:userName', (req, res) => {
    let { userName } = req.params;
    res.send(`usted ha ingresado el usuario ${userName}`);
    console.log(typeof userName);
})


//parsear (convertir) un parametro del tipo string a numero
app.get('/user/:id', (req, res) => {
    let { id } = req.params;
    res.send(`usted ha ingresado el usuario ${id}`);

    let numero = Number(id);
    if (isNaN(numero)) {
        return res.status(400).send("El ID debe ser un número");
    }
    console.log(numero)

    console.log(typeof id);
    console.log(typeof numero);
})


//ruta con dos parametros variables
app.get("/libro/:autor/:titulo", function (req, res) {
    console.log(req.params);
    res.send(
        `Usted ha seleccionado un libro de: ${req.params.autor}  cuyo titulo es es: ${req.params.titulo}`
    );
});

//--------------------------------------------------------------
//---------------------  req.query  ---------------------------
//ACA EMPEZAMOS A VER CON REQ.QUERY MEZCLADOS CON REQ.PARAMS

app.get("/libro/:id", function (req, res) {

    let { id } = req.params;
    console.log(req.query)

    if (req.query.autor) {
        console.log(`Autor: ${req.query.autor}`);
        res.send(`Libro con ID: ${req.params.id} y Autor: ${req.query.autor}`);
    } else if (req.query.titulo) {
        console.log(`Título: ${req.query.titulo}`);
        res.send(`Libro con ID: ${req.params.id} y Título: ${req.query.titulo}`);
    } else {
        res.send(`Libro con ID: ${req.params.id} sin autor ni título`);
    }
});

app.get("/reserva/:numReserva", function (req, res) {
    console.log(req.params)
    console.log(req.query)
    res.end()

});



//-------------------------------------------------------------------
//--------- ESTO ES UN EJEMPLO DEL PRACTICO DEL VIERNES -------------
//-------------------------------------------------------------------


// GET /usuarios/:id: Obtener un usuario por su id_usuario.
app.get('/usuarios/:id', (req, res) => {
    let { id } = req.params;
    res.send(`Usted ha ingresado el usuario con ID: ${id}`);
});


// POST /usuarios: Crear un nuevo usuario
app.post('/usuarios', (req, res) => {
    let { nombre, email } = req.body;
    if (!nombre || !email) {
        return res.status(400).send('Faltan datos del usuario');
    }
    res.status(201).send(`Usuario creado: ${nombre}, Email: ${email}`);

});



//-------------------------------------------------------------------
//--------- ENDPOINT DISPARADO CUANDO NO SE ENCUENTRA UNA RUTA ------
app.use((req, res) => {
    res.status(404).send("Has ingresado una URL sin procesamiento");
});


app.listen(3000, () => { console.log('http://localhost:3000'); });