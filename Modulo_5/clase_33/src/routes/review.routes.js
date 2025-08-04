import { Router } from "express";
import {
  getAllReviews,
  getReviewById,
  getReviewsByBookId,
  createReview,
  updateReviewById,
  deleteReviewById,
} from "../controller/review.controller.js";
import { validateCreateReview, validateUpdateReview } from "../middleware/middelware.js";

const router = Router();

router.get("/resenias", getAllReviews);
router.get("/resenias/libro/:id_libro", getReviewsByBookId);
router.get("/resenias/:id", getReviewById);
router.post("/resenias", validateCreateReview, createReview);
router.put("/resenias/:id", validateUpdateReview, updateReviewById);
router.delete("/resenias/:id", deleteReviewById);

export default router;
