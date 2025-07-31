import { obtenerUsuarios } from "../model/usuario.model.js"

export const getAllUsers = async (req, res) => {
    try {
        let users = await obtenerUsuarios();
        res.status(200).send({ users });

    } catch (error) {
        res.status(500).send(error);
    }
}

export const getUserByID = (req, res) => {
    res
        .status(200)
        .send(`Obtener un usuario por su id_usuario: ${req.params.id}`);
}

export const createUser = (req, res) => {
    res.status(201).send("Crear un nuevo usuario");
}

export const updateUserByID = (req, res) => {
    res
        .status(200)
        .send(`Actualizar los datos de un usuario con id: ${req.params.id}`);
}

export const deleteUser = (req, res) => {
    res.status(200).send(`Eliminar un usuario con id: ${req.params.id}`);
}



