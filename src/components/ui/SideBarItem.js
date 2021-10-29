import React from "react";

export const SideBarItem = ({ title, icon, goTo, path, active = false }) => {
  const iconClass = "fas fa-fw fa-" + icon;

  const liClass = "nav-item c_pointer " + (active ? "active" : "");

  return (
    <li className={liClass}>
      <a className="nav-link" onClick={() => goTo(path)}>
        <i className={iconClass}></i>
        <span>{title}</span>
      </a>
    </li>
  );
};
