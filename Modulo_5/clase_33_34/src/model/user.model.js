import { pool } from "../config/db.js";

export const getAll = async () => {
  try {
    const query = "SELECT * FROM usuario";
    const [rows] = await pool.query(query);
    return rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Could not fetch users from the database.");
  }
};

export const getById = async (id) => {
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
};

export const create = async (user) => {
  try {
    const { nombre, apellido, mail, contrasenia, id_rol } = user;
    const query =
      "INSERT INTO usuario (nombre, apellido, mail, contrasenia, id_rol) VALUES (?, ?, ?, ?, ?)";
    const [result] = await pool.query(query, [
      nombre,
      apellido,
      mail,
      contrasenia,
      id_rol,
    ]);
    return { id: result.insertId, ...user };
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Could not create user in the database.");
  }
};

export const updateById = async (id, user) => {
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
};

export const deleteById = async (id) => {
  try {
    const query = "DELETE FROM usuario WHERE id_usuario = ?";
    const [result] = await pool.query(query, [id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error(`Error deleting user with id ${id}:`, error);
    throw new Error(`Could not delete user with id ${id} from the database.`);
  }
};

/*
Las funciones pool.query y pool.execute devuelven una promesa que resuelve un array con dos elementos:

    const [rows, fields] = await pool.query(...);

- rows: los datos devueltos por la consulta (lo que más usás).
- fields: información de las columnas (solo útil a veces, como cuando querés saber metadatos).

Si hacés solo esto:
    const result = await pool.query(...);
Entonces result es un array con 2 elementos:    console.log(result); // [ rows, fields ]

Pero si hacés:
    const [rows] = await pool.query(...);       
Estás desestructurando y tomando solo los resultados (rows), que es lo más común.


En cambio, si hacés:
    const [rows, fields] = await pool.query(...);
    // o const rows = await pool.query(...);  <- cuidado, porque no es directamente los datos
Estás tomando los metadatos también, o podrías confundir el tipo de lo que recibís.



NO await pool.query(`SELECT * FROM usuarios WHERE nombre = '${nombre}'`);
SI await pool.execute('SELECT * FROM usuarios WHERE nombre = ?', [nombre]);


*/
