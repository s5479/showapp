import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar bg-dark border-bottom border-bottom-dark d-flex justify-content-center"
        style={{ height: "80px" }}
        data-bs-theme="dark"
      >
        <div className="d-flex text-center">
          <Link className="navbar-brand" to="/">
            <h3>Show'S House</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
