export default function validarCrearCuenta(valores) {
  let errores = {};

  if (!valores.nombre) {
    errores.nombre = "El Nombre es obligatorio";
  }
  if (!valores.email) {
    valores.email = "El Email es obligatorio";
  } else if (
    !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
      valores.email
    )
  ) {
    errores.email = "Email no valido";
  }
  if (!valores.password) {
    errores.nombre = "La Contraseña es obligatoria";
  } else if (!valores.password) {
    errores.nombre = "Debe ser de al menos 6 caracteres";
  }
  return errores;
}
