
import { check, param, validationResult } from 'express-validator';

export const validateCreateReview = [
  check('id_usuario')
    .isInt().withMessage('El ID del usuario debe ser un número entero.')
    .notEmpty().withMessage('El ID del usuario es un campo requerido.'),

  check('id_libro')
    .isInt().withMessage('El ID del libro debe ser un número entero.')
    .notEmpty().withMessage('El ID del libro es un campo requerido.'),

  check('texto_resenia')
    .isString().withMessage('El texto de la reseña debe ser un texto.')
    .optional(),

  check('calificacion')
    .isInt({ min: 1, max: 5 }).withMessage('La calificación debe ser un número entero entre 1 y 5.')
    .notEmpty().withMessage('La calificación es un campo requerido.'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export const validateUpdateReview = [
  param('id').isInt().withMessage('El ID de la reseña debe ser un número entero.'),
  check('id_usuario')
    .isInt().withMessage('El ID del usuario debe ser un número entero.')
    .optional(),

  check('id_libro')
    .isInt().withMessage('El ID del libro debe ser un número entero.')
    .optional(),

  check('texto_resenia')
    .isString().withMessage('El texto de la reseña debe ser un texto.')
    .optional(),

  check('calificacion')
    .isInt({ min: 1, max: 5 }).withMessage('La calificación debe ser un número entero entre 1 y 5.')
    .optional(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export const validateReviewId = [
  param('id').isInt().withMessage('El ID de la reseña debe ser un número entero.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export const validateBookId = [
  param('id_libro').isInt().withMessage('El ID del libro debe ser un número entero.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
