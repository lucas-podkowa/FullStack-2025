class Validate {
  // Valida si un campo está vacío
  static isEmpty(value) {
    return !value || value.trim().length === 0;
  }

  // Valida el formato de un correo electrónico
  static isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Valida que una fecha esté en el formato correcto (YYYY-MM-DD)
  static isDateValid(date) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  }

  // Valida la longitud de una cadena
  static isLengthValid(value, minLength, maxLength) {
    return value.length >= minLength && value.length <= maxLength;
  }

  // Valida que la extensión de un correo electrónico sea .com
  static isEmailComDomain(email) {
    return email.endsWith(".com");
  }

  // Agrega otras validaciones que necesites...
  // ...
  // ...

  // Valida si una cadena tiene al menos un número y una letra
  static isPasswordSecure(password) {
    const securePasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return securePasswordRegex.test(password);
  }

  // Validar un número de teléfono (ejemplo básico)
  static isPhoneNumberValid(phone) {
    const phoneRegex = /^\d{10}$/; // Valida un número de 10 dígitos
    return phoneRegex.test(phone);
  }

  // Valida que una fecha sea posterior a otra
  static isAfterDate(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return end > start;
  }
}

module.exports = Validate;
