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
  const passwordValue = watch("password");

  return (
      <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Iniciar sesión</h2>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          {/* Nombre */}
          <input
            placeholder="Nombre"
            className="bg-gray-100 text-gray-900 text-sm placeholder-gray-500 border border-gray-300 rounded-md p-2 mb-1"
            {...register("nombre", { required: "El nombre es requerido", minLength: { value: 3, message: "Debe tener al menos 3 caracteres" } })}
          />
          {errors.nombre && (
            <span className="text-red-500 text-sm mb-3">
              {errors.nombre.message}
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
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Formato de email inválido",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mb-3">
              {errors.email.message}
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

          {/* Botón */}
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:from-indigo-600 hover:to-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
  );
}

export default Formulario;