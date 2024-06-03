import React from "react";
import { NavLink } from "react-router-dom";
import "./Header10.css";

const Header: React.FC = () => {
  return (
    <nav className="header">
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/post" activeClassName="active">
        Post
      </NavLink>
    </nav>
  );
};

export default Header;
