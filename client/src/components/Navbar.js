import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props =>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="navbar-header">
      <Link className="navbar-brand" to="/">Google Books</Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="nav nav-link nav-item mr-auto">
          <Link to="/"
            className={
              window.location.pathname === "/" ||
                window.location.pathname === "/search"
                ? "active"
                : ""
            }
          >
            Search
        </Link>
          <Link to="/save"
            className={
              window.location.pathname === "/save"
                ? "active"
                : ""}
          >
            Saved
            </Link>
        </div>
      </div>
    </div>
  </nav>

export default Navbar;