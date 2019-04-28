import React, { Component } from "react";

// stateless functional component

// const NavBar = props => {
// instead using object destructuring
const NavBar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Total Items {totalCount}</span>
    </nav>
  );
};

export default NavBar;
