import React from "react";
import Nav from "../notes/Nav.js";
import "../Header/Header.css";

const Header = ({ title, hub }) => {
  return (
    <header className="Header">
      <h1>
        {title}
        <span>{hub}</span>{" "}
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
