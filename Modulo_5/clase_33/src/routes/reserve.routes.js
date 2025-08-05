import { Router } from "express";
import {
  getAllReserves,
  getReserveById,
  createReserve,
  updateReserveById,
  deleteReserveById,
  getReservesByUserId,
  getReservesByBookId,
} from "../controller/reserve.controller.js";
import { 
  validateCreateReserve, 
  validateUpdateReserve, 
  validateReserveId, 
  validateUserId, 
  validateBookId 
} from "../middleware/middelware.js";

const router = Router();

router.get("/prestamos", getAllReserves);
router.get("/prestamos/usuario/:id_usuario", validateUserId, getReservesByUserId);
router.get("/prestamos/libro/:id_libro", validateBookId, getReservesByBookId);
router.get("/prestamos/:id", validateReserveId, getReserveById);
router.post("/prestamos", validateCreateReserve, createReserve);
router.put("/prestamos/:id", validateUpdateReserve, updateReserveById);
router.delete("/prestamos/:id", validateReserveId, deleteReserveById);

export default router;