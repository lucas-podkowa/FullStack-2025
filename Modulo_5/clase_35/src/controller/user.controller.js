import { getAll, getById, create, updateById, deleteById, findByMail } from "../model/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
import 'dotenv/config';

// import dotenv from 'dotenv';
// dotenv.config();


export const login = async (req, res) => {
  try {
    const { mail, pass } = req.body;
    const userFromDB = await findByMail(mail);

    const iguales = bcrypt.compareSync(pass, userFromDB.contrasenia);
    if (iguales) {

      const payload = {
        nombre: userFromDB.nombre,
        apellido: userFromDB.apellido,
        mail: userFromDB.mail
      }

      const SECRET_KEY = process.env.JWT_SECRET || 'algunaClaveSecreta';
      //firmar(dato_a_firmar, 'clave_a_utulizar_en_la_firma', {tiempo_de_vida}, (err, exito)=>{ manejar el resultado})
      jwt.sign(payload, SECRET_KEY, { expiresIn: '600s' }, (err, token) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.status(200).json({ datos: payload, permiso: token });
        }
      })
    } else {
      res.status(403).send({ message: 'Contraseña Incorrecta' });
    }
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
}

//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
export const loginAlt = async (req, res) => {

  const SECRET_KEY = process.env.JWT_SECRET || 'pepe123';
  const TOKEN_EXPIRATION = '600s';
  try {
    const { mail, pass } = req.body;

    if (!mail || !pass) {
      return res.status(400).json({ message: 'Mail y contraseña son requeridos' });
    }

    const userFromDB = await findByMail(mail);
    const passwordMatch = await bcrypt.compare(pass, userFromDB.contrassenia);

    if (!passwordMatch) {
      return res.status(403).json({ message: 'Contraseña incorrecta' });
    }
    const payload = {
      nombre: userFromDB.nombre,
      apellido: userFromDB.apellido,
      mail: userFromDB.mail
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: TOKEN_EXPIRATION });

    return res.status(200).json({ datos: payload, credentials: token });

  } catch (error) {
    console.error('Error en login:', error);
    return res.status(error.status || 500).json({ message: error.message || 'Error en el servidor' });
  }
};

//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await getById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = await create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const updated = await updateById(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await deleteById(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



