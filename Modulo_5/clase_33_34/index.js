import express from "express";
import bookRouter from "./src/routes/book.routes.js";
import reserveRouter from "./src/routes/reserve.routes.js";
import reviewRouter from "./src/routes/review.routes.js";
import userRouter from "./src/routes/user.routes.js";

const app = express();
app.disable("x-powered-by");

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bookRouter);
app.use(reserveRouter);
app.use(reviewRouter);
app.use(userRouter);

//-------------------------------------------------------------------
//--------- ENDPOINT DISPARADO CUANDO NO SE ENCUENTRA UNA RUTA ------
app.use((req, res) => {
  res.status(404).send("Has ingresado una URL sin procesamiento");
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
