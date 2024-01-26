export const validacion_nombre = {
  required: {
    value: true,
    message: "El nombre es requerido",
  },
  minLength: {
    value: 3,
    message: "El nombre debe tener mínimo tres caracteres",
  },
  maxLength: {
    value: 20,
    message: "El nombre debe tener máximo 20 caracteres",
  },
};

export const validacion_email = {
  required: {
    value: true,
    message: "El correo es requerida",
  },
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Formano no válido",
  },
};

export const validacion_password = {
  required: {
    value: true,
    message: "La contraseña es requerida",
  },
  minLength: {
    value: 6,
    message: "La contraseña debe ser mínimo de 6 caracteres",
  },
};

export const validacion_nacimiento = {
  required: {
    value: true,
    message: "La fecha de nacimiento es requerida",
  },
  validate: (value) => {
    const fechaNacimiento = new Date(value);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    console.log(edad);
    return edad >= 18 || "Debes ser mayor de edad";
  },
};

export const validacion_terminos = {
  required: {
    value: true,
    message: "Debes aceptar los términos",
  },
};

export const validacion_provincia = {
  required: {
    value: true,
    message: "La provincia es requerida",
  },
};
