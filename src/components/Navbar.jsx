import React from "react";
import { Link } from "react-router-dom";
import a from "./main.module.css";

const Navbar = () => {
  return (
    <div>
      <>
        <nav id={a.nav} className="navbar">
          <div
            className="container-fluid"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link id={a.title} className="navbar-brand" to="/">
              Pradeep's Math App
            </Link>
            <Link to="/content" id={a.nav_content}>
              Home
            </Link>
          </div>
        </nav>
        {/* As a heading */}
      </>
    </div>
  );
};

export default Navbar;
