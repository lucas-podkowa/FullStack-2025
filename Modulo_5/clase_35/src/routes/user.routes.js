import { Router } from "express";
import { getAllUsers, getUserById, updateUserById, deleteUser } from "../controller/user.controller.js";
import { valUpdateUser, valUserId, } from "../middleware/user.validator.js";

const router = Router();

router.get("/usuarios", getAllUsers);
router.get("/usuarios/:id", valUserId, getUserById);
router.put("/usuarios/:id", valUpdateUser, updateUserById);
router.delete("/usuarios/:id", valUserId, deleteUser);

export default router;
