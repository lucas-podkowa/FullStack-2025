import userModel from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { nombre, apellido, mail, contrasenia } = req.body;
    const existingUser = await userModel.findByEmail(mail);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = await userModel.create({
      nombre,
      apellido,
      mail,
      contrasenia,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { mail, pass } = req.body;
    const user = await userModel.findByEmail(mail);
    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }
    const isMatch = await bcrypt.compare(pass, user.contrasenia);
    if (!isMatch) {
      return res.status(401).json({ message: "Contraseña Invalida" });
    }
    const token = jwt.sign(
      { id: user.id_usuario, rol: user.id_rol },
      process.env.SECRET_KEY,
      {
        expiresIn: process.env.TOKEN_EXPIRATION,
      }
    );
    res
      .status(200)
      .json({ usuario: user.nombre + user.apellido, token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await userModel.getById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
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
