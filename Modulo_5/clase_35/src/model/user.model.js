import { pool } from "../config/db.js";
import bcrypt from "bcryptjs";


const userModel = {
  getAll: async () => {
    try {
      const query = "SELECT * FROM usuario";
      const [rows] = await pool.query(query);
      return rows;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Could not fetch users from the database.");
    }
  },

  getById: async (id) => {
    try {
      const query = "SELECT * FROM usuario WHERE id_usuario = ?";
      const [rows] = await pool.query(query, [id]);
      if (rows.length === 0) {
        return null;
      }
      return rows[0];
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error);
      throw new Error(`Could not fetch user with id ${id} from the database.`);
    }
  },

  create: async (user) => {
    try {
      const { nombre, apellido, mail, contrasenia, id_rol = 3 } = user; // Default role to 'Lector'
      //ciframos la clave para que no se guarde como texto plano
      const hashedPassword = await bcrypt.hash(contrasenia, 10);
      const query = "INSERT INTO usuario (nombre, apellido, mail, contrasenia, id_rol) VALUES (?, ?, ?, ?, ?)";
      const [result] = await pool.execute(query, [nombre, apellido, mail, hashedPassword, id_rol]);
      return { id: result.insertId, nombre, apellido, mail, id_rol };
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Could not create user in the database.");
    }
  },

  findByEmail: async (mail) => {
    try {
      const query = "SELECT * FROM usuario WHERE mail = ?";
      const [rows] = await pool.query(query, [mail]);
      if (rows.length === 0) {
        return null;
      }
      return rows[0];
    } catch (error) {
      console.error(`Error fetching user with email ${mail}:`, error);
      throw new Error(`Could not fetch user with email ${mail} from the database.`);
    }
  },

  updateById: async (id, user) => {
    try {
      const { nombre, apellido, mail, contrasenia, id_rol } = user;
      const query =
        "UPDATE usuario SET nombre = ?, apellido = ?, mail = ?, contrasenia = ?, id_rol = ? WHERE id_usuario = ?";
      const [result] = await pool.query(query, [
        nombre,
        apellido,
        mail,
        contrasenia,
        id_rol,
        id,
      ]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating user with id ${id}:`, error);
      throw new Error(`Could not update user with id ${id} in the database.`);
    }
  },

  deleteById: async (id) => {
    try {
      const query = "DELETE FROM usuario WHERE id_usuario = ?";
      const [result] = await pool.query(query, [id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error deleting user with id ${id}:`, error);
      throw new Error(`Could not delete user with id ${id} from the database.`);
    }
  }
};

export default userModel;