import { getAll, getById, create, updateById, deleteById, getByUserId, getByBookId } from "../model/reserve.model.js";

export const getAllReserves = async (req, res) => {
  try {
    const reserves = await getAll();
    res.status(200).json(reserves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReserveById = async (req, res) => {
  try {
    const reserve = await getById(req.params.id);
    if (!reserve) {
      return res.status(404).json({ message: "Reserve not found" });
    }
    res.status(200).json(reserve);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createReserve = async (req, res) => {
  try {
    const newReserve = await create(req.body);
    res.status(201).json(newReserve);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReserveById = async (req, res) => {
  try {
    const updated = await updateById(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: "Reserve not found" });
    }
    res.status(200).json({ message: "Reserve updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteReserveById = async (req, res) => {
  try {
    const deleted = await deleteById(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Reserve not found" });
    }
    res.status(200).json({ message: "Reserve deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReservesByUserId = async (req, res) => {
  try {
    const reserves = await getByUserId(req.params.id_usuario);
    res.status(200).json(reserves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReservesByBookId = async (req, res) => {
  try {
    const reserves = await getByBookId(req.params.id_libro);
    res.status(200).json(reserves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};