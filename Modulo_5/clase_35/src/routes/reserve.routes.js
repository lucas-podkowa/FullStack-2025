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

import { valCreateReserve, valUpdateReserve, valReserveId, valUserId, valBookId, } from "../middleware/reserve.validator.js";

const router = Router();

router.get("/prestamos", getAllReserves);
router.get("/prestamos/usuario/:id_usuario", valUserId, getReservesByUserId);
router.get("/prestamos/libro/:id_libro", valBookId, getReservesByBookId);
router.get("/prestamos/:id", valReserveId, getReserveById);
router.post("/prestamos", valCreateReserve, createReserve);
router.put("/prestamos/:id", valUpdateReserve, updateReserveById);
router.delete("/prestamos/:id", valReserveId, deleteReserveById);

export default router;
