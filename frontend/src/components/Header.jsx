import React from "react";
import "../assets/HeaderStyle.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Barbershop</h1>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#appointments">Appointments</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
