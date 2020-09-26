import React from "react";

import "../Css/Hero.css";

import stare from "../Assets/Stare.png";

const Hero = () => {
  return (
    <div>
      <div className="hero container">
        <img className="stare" src={stare} />
      </div>
    </div>
  );
};

export default Hero;
