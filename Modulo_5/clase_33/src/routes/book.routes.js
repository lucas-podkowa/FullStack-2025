import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
  getAvailableBooks,
  updateBookStock,
} from "../controller/book.controller.js";
import { validateStock, validateCreateBook, validateUpdateBook } from "../middleware/middelware.js";

const router = Router();

router.get("/libros", getAllBooks);
router.get("/libros/disponibles", getAvailableBooks);
router.get("/libros/:id", getBookById);
router.post("/libros", validateCreateBook, createBook);
router.put("/libros/:id", validateUpdateBook, updateBookById);
router.patch("/libros/:id/existencias", validateStock, updateBookStock);
router.delete("/libros/:id", deleteBookById);

export default router;
