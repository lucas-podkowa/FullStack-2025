
import { Router } from "express";

const router = Router();

router.get("/prestamos", (req, res) => {
    res.status(200).send("Obtener todos los préstamos");
});

router.get("/prestamos/:id", (req, res) => {
    res
        .status(200)
        .send(`Obtener un préstamo por su id_prestamos: ${req.params.id}`);
});

router.post("/prestamos", (req, res) => {
    res.status(201).send("Crear un nuevo préstamo (reserva de un libro)");
});

router.put("/prestamos/:id", (req, res) => {
    res
        .status(200)
        .send(`Actualizar los datos de un préstamo con id: ${req.params.id}`);
});

router.delete("/prestamos/:id", (req, res) => {
    res.status(200).send(`Eliminar un préstamo con id: ${req.params.id}`);
});

export default router;


