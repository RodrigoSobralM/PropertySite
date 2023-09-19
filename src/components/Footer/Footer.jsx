import React from "react";
import logoLetter from "../../assets/logoLetter.svg";
import './index.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logoLetter} alt="logo somente letras" />
        <img src="/iconInstagram.svg" alt="icone do instagram" />
      </div>
      <div className="footer__contact">
        <p>Duvidas entre em contato !</p>
        <div className="footer__fone">
          <img src="/iconFone.svg" alt="icone telefone" />
          <p>(xx) xxxx - xxxx</p>
        </div>
        <div className="footer__email">
          <img src="/iconEmail.svg" alt="icone email" />
          <p>exmplo@hotmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
