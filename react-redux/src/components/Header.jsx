import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  console.log("hei");
  const activeStyle = { color: "blue" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/products" activeStyle={activeStyle}>
        Products
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
