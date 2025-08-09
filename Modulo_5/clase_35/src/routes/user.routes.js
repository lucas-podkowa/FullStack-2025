import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser,
  login
} from "../controller/user.controller.js";
import { valCreateUser, valUpdateUser, valUserId, } from "../middleware/user.validator.js";

const router = Router();

router.get("/usuarios", getAllUsers);
router.get("/usuarios/:id", valUserId, getUserById);
router.post("/usuarios", valCreateUser, createUser);
router.put("/usuarios/:id", valUpdateUser, updateUserById);
router.delete("/usuarios/:id", valUserId, deleteUser);
router.post("/usuarios/login", login);

export default router;
