import React, { useEffect, useState } from "react";
import { ErrorAlert } from "../components/parts/ErrorAlert";

export const LoginScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [error, setError] = useState(false);

  const { email, password, remember } = form;

  const handleChange = (e) => {
    const nombre = e.target.name;
    const valor = e.target.value;
    const check = e.target.checked;
    setForm({
      ...form,
      [nombre]: nombre === "remember" ? check : valor,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (remember) {
      localStorage.setItem("email", email);
    }
    setError(true);
  };

  useEffect(() => {
    if (localStorage.getItem("email"))
      setForm({
        ...form,
        email: localStorage.getItem("email"),
      });
  }, []);

  return (
    <div className="container">
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-6 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Inicio de sesión
                      </h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user invalid-input"
                          id="email"
                          name="email"
                          value={email}
                          placeholder="Ingresa tu email..."
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user invalid-input"
                          id="password"
                          name="password"
                          value={password}
                          placeholder="Ingresa tu contraseña"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="remember"
                            name="remember"
                            checked={remember}
                            onChange={handleChange}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="remember"
                          >
                            Recuerdame
                          </label>
                        </div>
                      </div>
                      {error ? (
                        <ErrorAlert
                          msg="Usuario incorrecto"
                          entrada="animate__fadeInDown"
                          salida="animate__fadeOutUp"
                          setError={setError}
                          error={error}
                        />
                      ) : null}
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Iniciar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
