import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser,
} from "../controller/user.controller.js";
import { 
  validateCreateUser, 
  validateUpdateUser, 
  validateUserId 
} from "../middleware/middelware.js";

const router = Router();

router.get("/usuarios", getAllUsers);
router.get("/usuarios/:id", validateUserId, getUserById);
router.post("/usuarios", validateCreateUser, createUser);
router.put("/usuarios/:id", validateUpdateUser, updateUserById);
router.delete("/usuarios/:id", validateUserId, deleteUser);

export default router;