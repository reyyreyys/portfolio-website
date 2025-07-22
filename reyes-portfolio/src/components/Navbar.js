import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Reyes Ng
        </Link>
        <div className={isOpen ? "nav-menu active" : "nav-menu"}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="/skills" className="nav-link" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
          <Link to="/leadership" className="nav-link" onClick={() => setIsOpen(false)}>
            Leadership
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
