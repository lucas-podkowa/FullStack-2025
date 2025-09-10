import { check, param, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import 'dotenv/config';

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

export const isAutenticated = (req, res, next) => {
  if (req.headers["authorization"]) {
    try {
      const token = req.headers["authorization"];

      const claveSecreta = process.env.SECRET_KEY
      const verified = jwt.verify(token, claveSecreta);
      if (verified) {
        next();
      } else {
        res.status(403).json({ message: "token invalido" });
      }
    } catch (error) {
      res.status(403).json({ message: error.message });
    }
  } else {
    return res
      .status(403)
      .json({ message: "No tienes token de autenticación, vuelve a loguear" });
  }
};

//----- alternativa

function verificarToken(req, res, next) {
  if (req.headers["authorization"]) {
    try {
      const token = req.headers["authorization"];
      const verified = jwt.verify(token, "ultraMegaSecretPass");
      if (verified) {
        next();
      } else {
        res.status(403).send({
          message: "Token invalido, permiso denegado",
        });
      }
    } catch (error) {
      res.status(403).send({
        message: "Acceso Denegado",
      });
    }
  } else {
    res.status(403).send({
      message: "No posee token de autorizacion",
    });
  }
}
