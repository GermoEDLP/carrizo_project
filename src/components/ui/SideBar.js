import React from "react";
import { Link, useHistory } from "react-router-dom";
import { SideBarItem } from "./SideBarItem";

export const SideBar = () => {
  const history = useHistory();

  console.log(history);

  const goTo = (path) => {
    history.push(path);
  };

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center c_pointer"
        onClick={() => goTo("/")}
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Carrizo</div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <SideBarItem
        title="Nuevo trabajo"
        icon="plus"
        goTo={goTo}
        path="/new"
        active={history.location.pathname === "/new"}
      />

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Usuarios</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <SideBarItem
        title="Clientes"
        icon="users"
        goTo={goTo}
        path="/clients"
        active={history.location.pathname === "/clients"}
      />

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <SideBarItem
        title="Odontologías"
        icon="tooth"
        goTo={goTo}
        path="/odonto"
        active={history.location.pathname === "/odonto"}
      />

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Addons</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="false"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="login.html">
              Login
            </a>
            <a className="collapse-item" href="register.html">
              Register
            </a>
            <a className="collapse-item" href="forgot-password.html">
              Forgot Password
            </a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item" href="404.html">
              404 Page
            </a>
            <a className="collapse-item active" href="blank.html">
              Blank Page
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </a>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
};
