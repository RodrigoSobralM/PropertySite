import React from "react";
import logoLetter from "../../assets/logoLetter.svg"
import iconAba from "../../assets/iconAba.svg"
import "./index.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logoLetter} alt="logo letras" />
        <img src={iconAba} alt="logo img" />
      </div>
    </div>
  );
};

export default Header;
