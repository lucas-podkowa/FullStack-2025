import bookModel from "../model/book.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const { busqueda = "" } = req.query;
    const books = await bookModel.getAll(busqueda);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await bookModel.getById(req.params.id);
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
    const data = req.body;
    //----------------------------------------------------------------
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;
    data.image_url = imagePath;
    //----------------------------------------------------------------

    const newBook = await bookModel.create(data);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBookById = async (req, res) => {
  try {
    const updated = await bookModel.updateById(req.params.id, req.body);
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
    const deleted = await bookModel.deleteById(req.params.id);
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
    const books = await bookModel.getAvailable();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBookStock = async (req, res) => {
  try {
    const { existencias } = req.body;
    const updated = await bookModel.updateStockById(req.params.id, existencias);
    if (!updated) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book stock updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
