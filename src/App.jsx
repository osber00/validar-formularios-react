import { useForm } from "react-hook-form";
import {
  validacion_email,
  validacion_nacimiento,
  validacion_nombre,
  validacion_password,
  validacion_provincia,
  validacion_terminos,
} from "./utils/validaciones";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({ defaultValues: { pais: "mx" } });

  //console.log(errors);

  const submitForm = handleSubmit((data) => {
    console.log("Enviando Formulario");
    console.log(data);
    alert("Enviando datos");
    /* Se puede usar también para establecer un valor inicial */
    setValue("email", "");
    /* Limpiar los campos del formulario */
    reset();
  });

  return (
    <form onSubmit={submitForm}>
      <div className='grupo'>
        <label htmlFor='nombre'>Nombre</label>
        <input
          type='text'
          placeholder='Nombre'
          {...register("nombre", validacion_nombre)}
        />
        {errors.nombre && <span>{errors.nombre.message}</span>}
      </div>
      <div className='grupo'>
        <label htmlFor='correo'>Email</label>
        <input
          type='email'
          placeholder='Email'
          {...register("email", validacion_email)}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className='grupo'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='********'
          {...register("password", validacion_password)}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div className='grupo'>
        <label htmlFor='confirmarPassword'>Confirmar Password</label>
        <input
          type='password'
          placeholder='********'
          {...register("confirmarpassword", {
            required: {
              value: true,
              message: "La confirmación de la contraseña es requerida",
            },
            validate: (value) => {
              if (value === watch("password")) {
                return true;
              } else {
                return "Las contraseñas no coinciden";
              }
            },
          })}
        />
        {errors.confirmarpassword && (
          <span>{errors.confirmarpassword.message}</span>
        )}
      </div>
      <div className='grupo'>
        <label htmlFor='nacimiento'>Fecha de nacimiento</label>
        <input
          type='date'
          placeholder='Fecha de nacimiento'
          {...register("nacimiento", validacion_nacimiento)}
        />
        {errors.nacimiento && <span>{errors.nacimiento.message}</span>}
      </div>
      <div className='grupo'>
        <label htmlFor='pais'>País</label>
        <select {...register("pais")}>
          <option value='co'>Colombia</option>
          <option value='mx'>México</option>
          <option value='ar'>Argentina</option>
        </select>
      </div>
      {watch("pais") == "ar" && (
        <div className='grupo'>
          <label htmlFor='provincia'>Provincia</label>
          <input
            type='text'
            placeholder='Provincia'
            {...register("provincia", validacion_provincia)}
          />
          {errors.provincia && <span>{errors.provincia.message}</span>}
        </div>
      )}
      <div className='grupo'>
        <label htmlFor='foto'>Foto</label>
        <input
          type='file'
          onChange={(e) => {
            console.log(e.target.files[0]);
            setValue("foto_usuario", e.target.files[0].name);
          }}
        />
      </div>
      <div className='grupo'>
        <label htmlFor='terminos'>Términos y condiciones</label>
        <input type='checkbox' {...register("terminos", validacion_terminos)} />
      </div>
      <div className='grupo'>
        <button type='submit' className='enviar'>
          Confirmar
        </button>
      </div>
      {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
    </form>
  );
};

export default App;
