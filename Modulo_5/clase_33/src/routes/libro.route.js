import { Router } from "express";
const router = Router();

router.get("/libros", (req, res) => {
    res.status(200).send("Obtener todos los libros");
    console.log("Obtener todos los libros");
});

router.get("/libros/:id", (req, res) => {
    res.status(200).send(`Obtener un libro por su id_libro: ${req.params.id}`);
});

router.post("/libros", (req, res) => {
    res.status(201).send("Crear un nuevo libro");
});

router.put("/libros/:id", (req, res) => {
    res
        .status(200)
        .send(`Actualizar los datos de un libro con id: ${req.params.id}`);
});

router.put("/libros/:id/existencia", (req, res) => {
    res
        .status(200)
        .send(`Actualizar la existencia del libro con id: ${req.params.id}`);
});

router.delete("/libros/:id", (req, res) => {
    res.status(200).send(`Eliminar un libro con id: ${req.params.id}`);
});

export default router;






