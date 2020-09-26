import React from "react";

import "../Css/Nav.css";

const Nav = () => {
  return (
    <div className="nav container">
      <a href="#top" className="nav--link">
        Top
      </a>
      <a href="#about" className="nav--link">
        About
      </a>
    </div>
  );
};

export default Nav;
