import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <p
        style={{
          display: "inline",
          marginLeft: "20px",
          fontSize: "20px",
          textShadow: "3px 5px 6px #082d2b",
        }}
      >
        Contact Book
      </p>

      {window.location.pathname === "/" ? (
        <div className="navOptions">
          <Link to="/contact/add" className="options">
            + Add Contact
          </Link>
          <button className="options" onClick={props.deleteAll}>
            Delete All
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default Navbar;
