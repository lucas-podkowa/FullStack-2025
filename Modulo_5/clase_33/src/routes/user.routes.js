import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser,
} from "../controller/user.controller.js";
const router = Router();

router.get("/usuarios", getAllUsers);
router.get("/usuarios/:id", getUserById);
router.post("/usuarios", createUser);
router.put("/usuarios/:id", updateUserById);
router.delete("/usuarios/:id", deleteUser);

export default router;
