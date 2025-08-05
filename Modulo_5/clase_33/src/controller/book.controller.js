import { getAll, getById, create, updateById, deleteById, getAvailable, updateStockById } from "../model/book.model.js";


export const getAllBooks = async (req, res) => {
  try {
    const books = await getAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await getById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createBook = async (req, res) => {
  try {
    const newBook = await create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBookById = async (req, res) => {
  try {
    const updated = await updateById(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBookById = async (req, res) => {
  try {
    const deleted = await deleteById(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAvailableBooks = async (req, res) => {
  try {
    const books = await getAvailable();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBookStock = async (req, res) => {
  try {
    const { existencias } = req.body;
    const updated = await updateStockById(req.params.id, existencias);
    if (!updated) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book stock updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};