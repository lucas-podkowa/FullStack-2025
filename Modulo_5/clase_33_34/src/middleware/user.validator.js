import { check, param, validationResult } from "express-validator";

export const valCreateUser = [
  check("nombre")
    .isString()
    .withMessage("El nombre debe ser un texto.")
    .notEmpty()
    .withMessage("El nombre es un campo requerido."),

  check("apellido")
    .isString()
    .withMessage("El apellido debe ser un texto.")
    .notEmpty()
    .withMessage("El apellido es un campo requerido."),

  check("mail")
    .isEmail()
    .withMessage("El mail debe ser un correo electrónico válido.")
    .notEmpty()
    .withMessage("El mail es un campo requerido."),

  check("contrasenia")
    .isString()
    .withMessage("La contraseña debe ser un texto.")
    .notEmpty()
    .withMessage("La contraseña es un campo requerido."),

  check("id_rol")
    .isInt()
    .withMessage("El ID del rol debe ser un número entero.")
    .notEmpty()
    .withMessage("El ID del rol es un campo requerido."),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const valUpdateUser = [
  param("id")
    .isInt()
    .withMessage("El ID del usuario debe ser un número entero."),
  check("nombre")
    .isString()
    .withMessage("El nombre debe ser un texto.")
    .optional(),

  check("apellido")
    .isString()
    .withMessage("El apellido debe ser un texto.")
    .optional(),

  check("mail")
    .isEmail()
    .withMessage("El mail debe ser un correo electrónico válido.")
    .optional(),

  check("contrasenia")
    .isString()
    .withMessage("La contraseña debe ser un texto.")
    .optional(),

  check("id_rol")
    .isInt()
    .withMessage("El ID del rol debe ser un número entero.")
    .optional(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const valUserId = [
  param("id")
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
