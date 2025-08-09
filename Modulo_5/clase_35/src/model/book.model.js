import { pool } from "../config/db.js";

const bookModel = {
  getAll: async () => {
    try {
      const query = "SELECT * FROM libro";
      const [rows] = await pool.query(query);
      return rows;
    } catch (error) {
      console.error("Error fetching books:", error);
      throw new Error("Could not fetch books from the database.");
    }
  },
  getById: async (id) => {
    try {
      const query = "SELECT * FROM libro WHERE id_libro = ?";
      const [rows] = await pool.query(query, [id]);
      if (rows.length === 0) {
        return null;
      }
      return rows[0];
    } catch (error) {
      console.error(`Error fetching book with id ${id}:`, error);
      throw new Error(`Could not fetch book with id ${id} from the database.`);
    }
  },

  create: async (book) => {
    try {
      const {
        titulo,
        autor,
        editorial,
        anio_publicacion,
        genero,
        existencias,
      } = book;
      const query =
        "INSERT INTO libro (titulo, autor, editorial, anio_publicacion, genero, existencias) VALUES (?, ?, ?, ?, ?, ?)";
      const [result] = await pool.query(query, [
        titulo,
        autor,
        editorial,
        anio_publicacion,
        genero,
        existencias,
      ]);
      return { id: result.insertId, ...book };
    } catch (error) {
      console.error("Error creating book:", error);
      throw new Error("Could not create book in the database.");
    }
  },
  updateById: async (id, book) => {
    try {
      const {
        titulo,
        autor,
        editorial,
        anio_publicacion,
        genero,
        existencias,
      } = book;
      const query =
        "UPDATE libro SET titulo = ?, autor = ?, editorial = ?, anio_publicacion = ?, genero = ?, existencias = ? WHERE id_libro = ?";
      const [result] = await pool.query(query, [
        titulo,
        autor,
        editorial,
        anio_publicacion,
        genero,
        existencias,
        id,
      ]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating book with id ${id}:`, error);
      throw new Error(`Could not update book with id ${id} in the database.`);
    }
  },
  getAvailable: async () => {
    try {
      const query = "SELECT * FROM libro WHERE existencias > 0";
      const [rows] = await pool.query(query);
      return rows;
    } catch (error) {
      console.error("Error fetching available books:", error);
      throw new Error("Could not fetch available books from the database.");
    }
  },
  deleteById: async (id) => {
    try {
      const query = "DELETE FROM libro WHERE id_libro = ?";
      const [result] = await pool.query(query, [id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error deleting book with id ${id}:`, error);
      throw new Error(`Could not delete book with id ${id} from the database.`);
    }
  },
  updateStockById: async (id, existencias) => {
    try {
      const query = "UPDATE libro SET existencias = ? WHERE id_libro = ?";
      const [result] = await pool.query(query, [existencias, id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating stock for book with id ${id}:`, error);
      throw new Error(
        `Could not update stock for book with id ${id} in the database.`
      );
    }
  },
};

export default bookModel;
