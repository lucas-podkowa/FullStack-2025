import { check, param, validationResult } from "express-validator";

export const valCreateBook = [
  check("titulo")
    .isString()
    .withMessage("El título debe ser un texto.")
    .notEmpty()
    .withMessage("El título es un campo requerido."),

  check("autor")
    .isString()
    .withMessage("El autor debe ser un texto.")
    .notEmpty()
    .withMessage("El autor es un campo requerido."),

  check("editorial")
    .isString()
    .withMessage("La editorial debe ser un texto.")
    .optional(),

  check("anio_publicacion")
    .isString()
    .withMessage("El año de publicación debe ser un texto.")
    .isLength({ min: 4, max: 4 })
    .withMessage("El año de publicación debe tener 4 caracteres.")
    .notEmpty()
    .withMessage("El año de publicación es un campo requerido."),

  check("genero")
    .isString()
    .withMessage("El género debe ser un texto.")
    .optional(),

  check("existencias")
    .isInt()
    .withMessage("Las existencias deben ser un número entero.")
    .optional(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const valUpdateBook = [
  param("id").isInt().withMessage("El ID del libro debe ser un número entero."),
  check("titulo")
    .isString()
    .withMessage("El título debe ser un texto.")
    .optional(),

  check("autor")
    .isString()
    .withMessage("El autor debe ser un texto.")
    .optional(),

  check("editorial")
    .isString()
    .withMessage("La editorial debe ser un texto.")
    .optional(),

  check("anio_publicacion")
    .isString()
    .withMessage("El año de publicación debe ser un texto.")
    .isLength({ min: 4, max: 4 })
    .withMessage("El año de publicación debe tener 4 caracteres.")
    .optional(),

  check("genero")
    .isString()
    .withMessage("El género debe ser un texto.")
    .optional(),

  check("existencias")
    .isInt()
    .withMessage("Las existencias deben ser un número entero.")
    .optional(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const valUpdateBookStock = [
  param("id").isInt().withMessage("El ID del libro debe ser un número entero."),
  check("existencias")
    .isInt()
    .withMessage("Las existencias deben ser un número entero.")
    .notEmpty()
    .withMessage("Las existencias son un campo requerido."),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const valBookId = [
  param("id").isInt().withMessage("El ID del libro debe ser un número entero."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
