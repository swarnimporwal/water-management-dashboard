import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <ul className="nav">
        <li className="nav__item">
          <Link to="/dashboard" className="nav__link">
            Dashboard
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/dashboard/hooks" className="nav__link">
            Dashboard Using Hooks
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
