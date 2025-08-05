import { check, param, validationResult } from "express-validator";

export const valCreateReserve = [
  check("id_usuario")
    .isInt()
    .withMessage("El ID del usuario debe ser un número entero.")
    .notEmpty()
    .withMessage("El ID del usuario es un campo requerido."),

  check("id_libro")
    .isInt()
    .withMessage("El ID del libro debe ser un número entero.")
    .notEmpty()
    .withMessage("El ID del libro es un campo requerido."),

  check("fecha_prestamo")
    .isISO8601()
    .withMessage("La fecha de préstamo debe tener un formato de fecha válido.")
    .notEmpty()
    .withMessage("La fecha de préstamo es un campo requerido."),

  check("fecha_devolucion")
    .isISO8601()
    .withMessage(
      "La fecha de devolución debe tener un formato de fecha válido."
    )
    .optional(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const valUpdateReserve = [
  param("id")
    .isInt()
    .withMessage("El ID del préstamo debe ser un número entero."),
  check("id_usuario")
    .isInt()
    .withMessage("El ID del usuario debe ser un número entero.")
    .optional(),

  check("id_libro")
    .isInt()
    .withMessage("El ID del libro debe ser un número entero.")
    .optional(),

  check("fecha_prestamo")
    .isISO8601()
    .withMessage("La fecha de préstamo debe tener un formato de fecha válido.")
    .optional(),

  check("fecha_devolucion")
    .isISO8601()
    .withMessage(
      "La fecha de devolución debe tener un formato de fecha válido."
    )
    .optional(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const valReserveId = [
  param("id")
    .isInt()
    .withMessage("El ID del préstamo debe ser un número entero."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const valUserId = [
  param("id_usuario")
    .isInt()
    .withMessage("El ID del usuario debe ser un número entero."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const valBookId = [
  param("id_libro")
    .isInt()
    .withMessage("El ID del libro debe ser un número entero."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
