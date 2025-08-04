import { body, validationResult } from "express-validator";

export const validateCreateBook = [
  body("titulo").notEmpty().withMessage("Title is required"),
  body("autor").notEmpty().withMessage("Author is required"),
  body("anio_publicacion").isLength({ min: 4, max: 4 }).withMessage("Publication year must be 4 characters long"),
  body("existencias").notEmpty().isInt({ min: 0 }).withMessage("Stock must be a positive integer"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateUpdateBook = [
  body("titulo").optional().notEmpty().withMessage("Title cannot be empty"),
  body("autor").optional().notEmpty().withMessage("Author cannot be empty"),
  body("anio_publicacion").optional().isLength({ min: 4, max: 4 }).withMessage("Publication year must be 4 characters long"),
  body("existencias").optional().isInt({ min: 0 }).withMessage("Stock must be a positive integer"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateCreateReview = [
  body("id_libro").notEmpty().isInt().withMessage("Book ID is required and must be an integer"),
  body("id_usuario").notEmpty().isInt().withMessage("User ID is required and must be an integer"),
  body("calificacion").notEmpty().isInt({ min: 1, max: 5 }).withMessage("Rating is required and must be an integer between 1 and 5"),
  body("texto_resenia").notEmpty().withMessage("Review text is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateUpdateReview = [
  body("texto_resenia").notEmpty().withMessage("Review text is required"),
  body("calificacion").isInt({ min: 1, max: 5 }).withMessage("Rating must be an integer between 1 and 5"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateStock = [
  body("existencias").notEmpty().isInt({ min: 0 }).withMessage("Stock must be a positive integer"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
