import express from "express";
import libroRouter from "./src/routes/libro.route.js";
import prestamoRouter from "./src/routes/prestamo.route.js";
import usuarioRouter from "./src/routes/usuario.route.js";

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(libroRouter);
app.use(prestamoRouter);
app.use(usuarioRouter);


app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});
