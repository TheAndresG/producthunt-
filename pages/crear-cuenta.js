import Layout from "../components/layout/Layout";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";

//validaciones
import useValidation from "../hooks/useValidation.jsx";
import validarCrearCuenta from "../validation/validarCrearCuenta";

export default function CrearCuenta() {
  const STATE_INICIAL = {
    nombre: "",
    email: "",
    password: "",
  };

  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidation(STATE_INICIAL, validarCrearCuenta);

  const { nombre, email, password } = valores;

  return (
    <div>
      <Layout>
        <h1>Crear Cuenta</h1>
        <Formulario onSubmit={handleSubmit} notvalidate>
          <Campo>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              placeholder="Tu nombre"
              name="nombre"
              value={nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>
          {errores.nombre && <Error>{errores.nombre}</Error>}

          <Campo>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Tu email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>
          {errores.email && <Error>{errores.email}</Error>}
          <Campo>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Tu password"
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>
          {errores.password && <Error>{errores.password}</Error>}

          <Campo>
            <InputSubmit type="submit" value="Crear Cuenta" />
          </Campo>
        </Formulario>
      </Layout>
    </div>
  );
}
