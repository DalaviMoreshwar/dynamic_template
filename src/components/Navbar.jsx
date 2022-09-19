import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-light ">
        <div className="container-fluid container">
          <Link to="/" className="navbar-brand" >
            Template List
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
