import React from "react";
import { NavLink } from "react-router-dom";

export const AppHeader = () => {
  return (
    <div className="navbar navbar-dark bg-primary navbar-expand">
      <span className="navbar-brand mb-0 h1">Resume Builder</span>
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to={"/"}>
          Home
        </NavLink>
        <NavLink className="nav-item nav-link" to={"/resume-builder"}>
          Resume Builder
        </NavLink>
      </div>
    </div>
  );
};
