import { useForm } from "react-hook-form";

function Formulario() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    alert("Formulario enviado correctamente");
  };

  const emailValue = watch("email");
  const passwordValue = watch("password");

  return (
      <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Iniciar sesión</h2>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          {/* Nombre */}
          <input
            placeholder="Nombre"
            className="bg-gray-100 text-gray-900 text-sm placeholder-gray-500 border border-gray-300 rounded-md p-2 mb-1"
            {...register("primerNombre", { required: "El nombre es requerido" })}
          />
          {errors.primerNombre && (
            <span className="text-red-500 text-sm mb-3">
              {errors.primerNombre.message}
            </span>
          )}

          {/* Apellido */}
          <input
            placeholder="Apellido"
            className="bg-gray-100 text-gray-900 text-sm placeholder-gray-500 border border-gray-300 rounded-md p-2 mb-1"
            {...register("apellido", { required: "El apellido es requerido" })}
          />
          {errors.apellido && (
            <span className="text-red-500 text-sm mb-3">
              {errors.apellido.message}
            </span>
          )}

          {/* Email */}
          <input
            placeholder="Email"
            type="email"
            className="bg-gray-100 text-gray-900 text-sm placeholder-gray-500 border border-gray-300 rounded-md p-2 mb-1"
            {...register("email", {
              required: "El email es requerido",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Formato de email inválido",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mb-3">
              {errors.email.message}
            </span>
          )}

          {/* Confirmar Email */}
          <input
            placeholder="Confirmar Email"
            type="email"
            className="bg-gray-100 text-gray-900 text-sm placeholder-gray-500 border border-gray-300 rounded-md p-2 mb-1"
            {...register("confirmaEmail", {
              required: "Debes confirmar el email",
              validate: (value) =>
                value === emailValue || "Los correos no coinciden",
            })}
          />
          {errors.confirmaEmail && (
            <span className="text-red-500 text-sm mb-3">
              {errors.confirmaEmail.message}
            </span>
          )}

          {/* Password */}
          <input
            placeholder="Contraseña"
            type="password"
            className="bg-gray-100 text-gray-900 text-sm placeholder-gray-500 border border-gray-300 rounded-md p-2 mb-1"
            {...register("password", {
              required: "La contraseña es requerida",
              minLength: {
                value: 6,
                message: "Debe tener al menos 6 caracteres",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm mb-3">
              {errors.password.message}
            </span>
          )}

          {/* Confirmar Password */}
          <input
            placeholder="Confirmar contraseña"
            type="password"
            className="bg-gray-100 text-gray-900 text-sm placeholder-gray-500 border border-gray-300 rounded-md p-2 mb-1"
            {...register("confirmaPassword", {
              required: "Debes confirmar la contraseña",
              validate: (value) =>
                value === passwordValue || "Las contraseñas no coinciden",
            })}
          />
          {errors.confirmaPassword && (
            <span className="text-red-500 text-sm mb-3">
              {errors.confirmaPassword.message}
            </span>
          )}

          {/* Género */}
          <label className="text-sm mb-2 text-gray-900 cursor-pointer">
            Género
          </label>
          <select
            className="bg-gray-100 text-gray-900 text-sm placeholder-gray-500 border border-gray-300 rounded-md p-2 mb-3"
            {...register("genero", { required: "Selecciona un género" })}
          >
            <option value="">Selecciona...</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>
          {errors.genero && (
            <span className="text-red-500 text-sm mb-3">
              {errors.genero.message}
            </span>
          )}

          {/* Fecha */}
          <label className="text-sm mb-2 text-gray-900 cursor-pointer">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            className="bg-gray-100 text-gray-900 text-sm placeholder-gray-500 border border-gray-300 rounded-md p-2 mb-3"
            {...register("edad", { required: "La fecha es requerida" })}
          />
          {errors.edad && (
            <span className="text-red-500 text-sm mb-3">
              {errors.edad.message}
            </span>
          )}

          {/* Botón */}
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:from-indigo-600 hover:to-blue-600"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
  );
}

export default Formulario;