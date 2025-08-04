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

const router = Router();

router.get("/prestamos", getAllReserves);
router.get("/prestamos/usuario/:id_usuario", getReservesByUserId);
router.get("/prestamos/libro/:id_libro", getReservesByBookId);
router.get("/prestamos/:id", getReserveById);
router.post("/prestamos", createReserve);
router.put("/prestamos/:id", updateReserveById);
router.delete("/prestamos/:id", deleteReserveById);

export default router;
