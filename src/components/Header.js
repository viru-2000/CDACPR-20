import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-light py-3 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo/Title */}
        <h1 className="h4 mb-0">One-Click Services</h1>

        {/* Navigation Buttons */}
        <div className="d-flex">
          <Link to="/login" className="btn btn-outline-primary me-2">
            Sign Up / Log In
          </Link>
          <Link to="/become-tasker" className="btn btn-primary me-2">
            Become a Tasker
          </Link>
          <Link to="/services" className="btn btn-primary">
            Services
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
