const Validate = require("./validate");

const registerUser = (req, res) => {
  const { name, email, birthDate } = req.body;

  // Validaciones
  if (Validate.isEmpty(name)) {
    return res.status(400).json({ error: "El nombre no puede estar vacío" });
  }

  if (!Validate.isEmailValid(email)) {
    return res
      .status(400)
      .json({ error: "El correo electrónico no es válido" });
  }

  if (!Validate.isEmailComDomain(email)) {
    return res
      .status(400)
      .json({ error: "El correo electrónico debe tener un dominio .com" });
  }

  if (!Validate.isDateValid(birthDate)) {
    return res
      .status(400)
      .json({
        error: "La fecha de nacimiento debe tener el formato YYYY-MM-DD",
      });
  }

  // Si todas las validaciones pasan
  res.status(200).json({ message: "Usuario registrado correctamente" });
};

module.exports = { registerUser };
