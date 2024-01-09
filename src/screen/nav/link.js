import React from "react";
import { Link } from "react-router-dom";

const LinkPage = () => {
  return (
    <div className="link-page">
      <NavLink to="/" text="Home" />
      <NavLink to="/about" text="About" />
      <NavLink to="/student" text="Student" />
      <NavLink to="/login" text="Login" />
      <NavLink to="/contact" text="Contact" />
    </div>
  );
};

const NavLink = ({ to, text }) => {
  return (
    <Link to={to}>
      <span>{text}</span>
    </Link>
  );
};

export default LinkPage;
