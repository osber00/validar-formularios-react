import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const submitForm = handleSubmit((data) => {
    console.log("Enviando Formulario");
  });

  return (
    <form onSubmit={submitForm}>
      <div className="grupo">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          placeholder="Nombre"
          {...register("nombre", {
            required: {
              value: true,
              message: 'El nombre es requerido'
            },
            minLength:{
              value:3,
              message: 'El nombre debe tener mínimo tres caracteres'
            },
            maxLength:{
              value: 20,
              message: 'El nombre debe tener máximo 20 caracteres'
            }
          })}
        />
        {errors.nombre && <span>{errors.nombre.message}</span>}
      </div>
      <div className="grupo">
        <label htmlFor="correo">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: 'El correo es requerida'
            },
            pattern:{
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Formano no válido'
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="grupo">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="********"
          {...register("password", {
            required: {
              value: true,
              message: 'La contraseña es requerida'
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div className="grupo">
        <label htmlFor="confirmarPassword">Confirmar Password</label>
        <input
          type="password"
          placeholder="********"
          {...register("confirmarpassword", {
            required: {
              value: true,
              message: 'La confirmación de la contraseña es requerida'
            },
          })}
        />
        {errors.confirmarpassword && <span>{errors.confirmarpassword.message}</span>}
      </div>
      <div className="grupo">
        <label htmlFor="nacimiento">Fecha de nacimiento</label>
        <input
          type="date"
          placeholder="Fecha de nacimiento"
          {...register("nacimiento", {
            required: {
              value: true,
              message: 'La fecha de nacimiento es requerida'
            },
            validate:(value)=>{
              const fechaNacimiento = new Date(value)
              const fechaActual = new Date()
              const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
              console.log(edad);
              return edad >= 18 || "Debes ser mayor de edad"
            }
          })}
        />
        {errors.nacimiento && <span>{errors.nacimiento.message}</span>}
      </div>
      <div className="grupo">
        <label htmlFor="pais">País</label>
        <select {...register("pais")}>
          <option value="co">Colombia</option>
          <option value="mx">México</option>
          <option value="ve">Venezuela</option>
        </select>
      </div>
      <div className="grupo">
        <label htmlFor="foto">Foto</label>
        <input type="file" {...register("foto")} />
      </div>
      <div className="grupo">
        <label htmlFor="terminos">Términos y condiciones</label>
        <input
          type="checkbox"
          {...register("terminos", {
            required: true,
          })}
        />
      </div>
      <div className="grupo">
        <button type="submit" className="enviar">
          Confirmar
        </button>
      </div>
    </form>
  );
};

export default App;
