import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiCode, FiBriefcase, FiFolder, FiBookOpen, FiMail } from "react-icons/fi";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/", icon: FiHome },
    { name: "About", path: "/about", icon: FiUser },
    { name: "Skills", path: "/skills", icon: FiCode },
    { name: "Experience", path: "/experience", icon: FiBriefcase },
    { name: "Projects", path: "/projects", icon: FiFolder },
    { name: "Learning", path: "/learning", icon: FiBookOpen },
    { name: "Contact", path: "/contact", icon: FiMail }
  ];

  return (
    <nav className="site-nav">
      <div className="navbar-container">
        <ul className="navbar-list">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name} className="navbar-item">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    isActive ? "navbar-link navbar-link-active" : "navbar-link"
                  }
                >
                  <Icon aria-hidden="true" />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
