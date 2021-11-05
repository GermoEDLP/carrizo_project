import React, { useState } from "react";

export const OdontoForm = ({ setShowForm, addOdonto }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    centro: "",
    address: "",
    cuil: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    addOdonto(form);
  };

  return (
    <div>
      <h5>Nuevo Odontologo</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">
              Nombre <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Ej. Juan Perez"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Ej ejemplo@ejemplo.com"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="phone">
              Teléfono <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Ej. (221) 522-0892"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="centro">Centro Odóntologico</label>
            <input
              type="text"
              className="form-control"
              id="centro"
              name="centro"
              placeholder="Ej. Centro Odóntologico La Plata"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="cuil">CUIL / CUIT</label>
            <input
              type="text"
              className="form-control"
              id="cuil"
              name="cuil"
              placeholder="20-12345678-0"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Ej. Calle 65 #456"
            name="address"
            onChange={handleChange}
          />
        </div>
        <p className="text-danger">
            * Campos obligatorios.
        </p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setShowForm(false)}
        >
          Cancelar
        </button>
        <button type="submit" className="btn btn-success float-right" disabled={form.name == "" || form.email == "" || form.phone == ""}>
          Crear
        </button>
      </form>
    </div>
  );
};
