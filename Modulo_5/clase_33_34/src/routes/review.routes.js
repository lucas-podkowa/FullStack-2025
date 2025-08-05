import { Router } from "express";
import {
  getAllReviews,
  getReviewById,
  getReviewsByBookId,
  createReview,
  updateReviewById,
  deleteReviewById,
} from "../controller/review.controller.js";
import { valCreateReview, valUpdateReview, valReviewId, valBookId, } from "../middleware/review.validator.js";

const router = Router();

router.get("/resenias", getAllReviews);
router.get("/resenias/libro/:id_libro", valBookId, getReviewsByBookId);
router.get("/resenias/:id", valReviewId, getReviewById);
router.post("/resenias", valCreateReview, createReview);
router.put("/resenias/:id", valUpdateReview, updateReviewById);
router.delete("/resenias/:id", valReviewId, deleteReviewById);

export default router;
