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
import { 
  validateCreateBook, 
  validateUpdateBook, 
  validateUpdateBookStock, 
  validateBookId 
} from "../middleware/middelware.js";


const router = Router();

router.get("/libros", getAllBooks);
router.get("/libros/disponibles", getAvailableBooks);
router.get("/libros/:id", validateBookId, getBookById);
router.post("/libros", validateCreateBook, createBook);
router.put("/libros/:id", validateUpdateBook, updateBookById);
router.patch("/libros/:id/existencias", validateUpdateBookStock, updateBookStock);
router.delete("/libros/:id", validateBookId, deleteBookById);

export default router;