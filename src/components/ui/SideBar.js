import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { SideBarItem } from "./SideBarItem";

export const SideBar = () => {
  const history = useHistory();

  const initialState = {
    show: false,
    class: "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
  };

  const [toggled, setToggled] = useState(initialState);

  const handleToggle = () => {
    if (toggled.show) {
      setToggled(initialState);
    } else {
      setToggled({
        show: true,
        class:
          "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled",
      });
    }
  };

  console.log(history);

  const goTo = (path) => {
    history.push(path);
  };

  return (
    <ul className={toggled.class} id="accordionSidebar">
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center c_pointer"
        onClick={() => goTo("/")}
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Carrizo</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <SideBarItem
        title="Nuevo trabajo"
        icon="plus"
        goTo={goTo}
        path="/new"
        active={history.location.pathname === "/new"}
      />

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Usuarios</div>

      <SideBarItem
        title="Clientes"
        icon="users"
        goTo={goTo}
        path="/clients"
        active={history.location.pathname === "/clients"}
      />

      <SideBarItem
        title="Odontologías"
        icon="tooth"
        goTo={goTo}
        path="/odonto"
        active={history.location.pathname === "/odonto"}
      />

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">
        {toggled.show ? "Config." : "Configuración"}
      </div>

      <SideBarItem
        title="Tipos de trabajo"
        icon="cog"
        goTo={goTo}
        path="/tipo"
        active={history.location.pathname === "/tipo"}
      />

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={handleToggle}
        ></button>
      </div>
    </ul>
  );
};
