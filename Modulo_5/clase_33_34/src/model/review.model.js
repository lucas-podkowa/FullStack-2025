import { pool } from "../config/db.js";

export const getAll = async () => {
  try {
    const query = "SELECT * FROM resenia";
    const [rows] = await pool.query(query);
    return rows;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw new Error("Could not fetch reviews from the database.");
  }
};

export const getById = async (id) => {
  try {
    const query = "SELECT * FROM resenia WHERE id_resenia = ?";
    const [rows] = await pool.query(query, [id]);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (error) {
    console.error(`Error fetching review with id ${id}:`, error);
    throw new Error(`Could not fetch review with id ${id} from the database.`);
  }
};

export const getByBookId = async (bookId) => {
  try {
    const query = "SELECT * FROM resenia WHERE id_libro = ?";
    const [rows] = await pool.query(query, [bookId]);
    return rows;
  } catch (error) {
    console.error(`Error fetching reviews for book with id ${bookId}:`, error);
    throw new Error(`Could not fetch reviews for book with id ${bookId} from the database.`);
  }
};

export const create = async (review) => {
  try {
    const { id_usuario, id_libro, texto_resenia, calificacion } = review;
    const query = "INSERT INTO resenia (id_usuario, id_libro, texto_resenia, calificacion) VALUES (?, ?, ?, ?)";
    const [result] = await pool.query(query, [id_usuario, id_libro, texto_resenia, calificacion]);
    return { id: result.insertId, ...review };
  } catch (error) {
    console.error("Error creating review:", error);
    throw new Error("Could not create review in the database.");
  }
};

export const updateById = async (id, review) => {
  try {
    const { id_usuario, id_libro, texto_resenia, calificacion } = review;
    const query = "UPDATE resenia SET id_usuario = ?, id_libro = ?, texto_resenia = ?, calificacion = ? WHERE id_resenia = ?";
    const [result] = await pool.query(query, [id_usuario, id_libro, texto_resenia, calificacion, id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error(`Error updating review with id ${id}:`, error);
    throw new Error(`Could not update review with id ${id} in the database.`);
  }
};

export const deleteById = async (id) => {
  try {
    const query = "DELETE FROM resenia WHERE id_resenia = ?";
    const [result] = await pool.query(query, [id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error(`Error deleting review with id ${id}:`, error);
    throw new Error(`Could not delete review with id ${id} from the database.`);
  }
};
