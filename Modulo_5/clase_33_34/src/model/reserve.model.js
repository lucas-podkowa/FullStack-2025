import { pool } from "../config/db.js";

export const getAll = async () => {
  try {
    const query = "SELECT * FROM prestamo";
    const [rows] = await pool.query(query);
    return rows;
  } catch (error) {
    console.error("Error fetching reserves:", error);
    throw new Error("Could not fetch reserves from the database.");
  }
};

export const getById = async (id) => {
  try {
    const query = "SELECT * FROM prestamo WHERE id_prestamo = ?";
    const [rows] = await pool.query(query, [id]);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (error) {
    console.error(`Error fetching reserve with id ${id}:`, error);
    throw new Error(`Could not fetch reserve with id ${id} from the database.`);
  }
};

export const create = async (reserve) => {
  try {
    const { id_usuario, id_libro, fecha_prestamo, fecha_devolucion } = reserve;
    const query = "INSERT INTO prestamo (id_usuario, id_libro, fecha_prestamo, fecha_devolucion) VALUES (?, ?, ?, ?)";
    const [result] = await pool.query(query, [id_usuario, id_libro, fecha_prestamo, fecha_devolucion]);
    return { id: result.insertId, ...reserve };
  } catch (error) {
    console.error("Error creating reserve:", error);
    throw new Error("Could not create reserve in the database.");
  }
};

export const updateById = async (id, reserve) => {
  try {
    const { id_usuario, id_libro, fecha_prestamo, fecha_devolucion } = reserve;
    const query = "UPDATE prestamo SET id_usuario = ?, id_libro = ?, fecha_prestamo = ?, fecha_devolucion = ? WHERE id_prestamo = ?";
    const [result] = await pool.query(query, [id_usuario, id_libro, fecha_prestamo, fecha_devolucion, id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error(`Error updating reserve with id ${id}:`, error);
    throw new Error(`Could not update reserve with id ${id} in the database.`);
  }
};

export const deleteById = async (id) => {
  try {
    const query = "DELETE FROM prestamo WHERE id_prestamo = ?";
    const [result] = await pool.query(query, [id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error(`Error deleting reserve with id ${id}:`, error);
    throw new Error(`Could not delete reserve with id ${id} from the database.`);
  }
};

export const getByUserId = async (userId) => {
  try {
    const query = "SELECT * FROM prestamo WHERE id_usuario = ?";
    const [rows] = await pool.query(query, [userId]);
    return rows;
  } catch (error) {
    console.error(`Error fetching reserves for user with id ${userId}:`, error);
    throw new Error(`Could not fetch reserves for user with id ${userId} from the database.`);
  }
};

export const getByBookId = async (bookId) => {
  try {
    const query = "SELECT * FROM prestamo WHERE id_libro = ?";
    const [rows] = await pool.query(query, [bookId]);
    return rows;
  } catch (error) {
    console.error(`Error fetching reserves for book with id ${bookId}:`, error);
    throw new Error(`Could not fetch reserves for book with id ${bookId} from the database.`);
  }
};
