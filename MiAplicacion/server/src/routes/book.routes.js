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
  valCreateBook,
  valUpdateBook,
  valUpdateBookStock,
  valBookId,
} from "../middleware/book.validator.js";

import { isAutenticated } from "../middleware/user.validator.js";

import { upSimple } from "../middleware/filesUpload.js";

const router = Router();

router.get("/libros", getAllBooks);
router.get("/libros/disponibles", getAvailableBooks);
router.get("/libros/:id", valBookId, getBookById);
router.post("/libros", upSimple, valCreateBook, createBook);
router.put("/libros/:id", valUpdateBook, updateBookById);
router.patch("/libros/:id/existencias", valUpdateBookStock, updateBookStock);
router.delete("/libros/:id", isAutenticated, valBookId, deleteBookById);

export default router;
