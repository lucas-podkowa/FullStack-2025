import express from "express";
import bookRouter from "./src/routes/book.routes.js";
import reserveRouter from "./src/routes/reserve.routes.js";
import reviewRouter from "./src/routes/review.routes.js";
import userRouter from "./src/routes/user.routes.js";
import 'dotenv/config';
// import dotenv from 'dotenv';
// dotenv.config();

const app = express();
app.disable("x-powered-by");

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bookRouter);
app.use(reserveRouter);
app.use(reviewRouter);
app.use(userRouter);

//esto era la fruta de Promise y Async/Await

// let datos = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json()
//   }).then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   });


// async function traerDatos() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users")
//   let data = await response.json();
//   console.log(data)

// }

//traerDatos();
//console.log(datos)


//-------------------------------------------------------------------
//--------- ENDPOINT DISPARADO CUANDO NO SE ENCUENTRA UNA RUTA ------
app.use((req, res) => {
  res.status(404).send("Has ingresado una URL sin procesamiento");
});

startServer(process.env.APP_PORT);



// funcion que intenta iniciar el servidor en el puerto especificado o en el siguiente disponible
function startServer(puerto) {
  const server = app.listen(puerto, () => {
    console.log(`Servidor escuchando en: http://localhost:${puerto}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Puerto ${puerto} en uso, intentando con el puerto ${puerto + 1}...`);
      puerto++;
      startServer(puerto); // Intenta con el siguiente puerto
    } else {
      console.error("Error al iniciar el servidor:", err);
    }
  });
}