import React, { useEffect, useState } from "react";

export const ErrorAlert = ({
  msg = "Ocurrió un error, intentelo nuevamente",
  entrada = " animate__zoomInDown",
  salida = " animate__zoomOutUp",
  tipo = "danger",
  setError,
  error,
}) => {
  const classInicial = "alert animate__animated alert-" + tipo;

  const [classError, setClassError] = useState(classInicial);

  const move = () => {
    setClassError(classInicial + " " + entrada);
    setError(true);
    setTimeout(() => {
      setClassError(classInicial + " " + salida);
      setTimeout(() => {
        setError(false);
      }, 700);
    }, 2000);
  };

  useEffect(() => {
    if (error) move();
  }, [error]);

  return <div className={classError}>{msg}</div>;
};
