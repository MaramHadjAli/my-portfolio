import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="navbar-container">
        <ul className="navbar-list">
          {navItems.map((item) => (
            <li key={item.name} className="navbar-item">
              <Link
                to={item.path}
                className="navbar-link"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
