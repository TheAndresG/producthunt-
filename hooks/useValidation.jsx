import React, { useEffect, useState } from "react";

const useValidation = (stateInicial, validar, fn) => {
  const [valores, setValores] = useState(stateInicial);
  const [errores, setErrores] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm === true) {
      const noErrores = Object.keys(errores).length === 0;
      if (noErrores) {
        fn(); // Funcion que se ejecuta en el componente
      }
      setSubmitForm(false);
    }
  }, [errores]);

  const handleChange = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidar = validar(valores);
    setErrores(erroresValidar);
    setSubmitForm(true);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    const erroresValidar = validar(valores);
    setErrores(erroresValidar);
  };

  return {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBlur,
  };
};

export default useValidation;
