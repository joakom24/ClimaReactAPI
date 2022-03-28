import React from "react";
import PropTypes from "prop-types";
import "../Styles/Header.css";
const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper center-align">
        <a href="#!" className="Logo">
          Weather Web
        </a>
      </div>
    </nav>
  );
};
Header.protoTypes = {
  titulo: PropTypes.string.isRequired,
};
export default Header;
