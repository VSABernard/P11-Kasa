import React from "react";
import logo from "../../assets/logo-kasa-white.svg";
import "../../components/Footer/Footer.css"

const Footer = () => {
  return (
    <footer>
      <picture className='image-footer'>
        <img src={logo} alt="logo" />
      </picture>
      <p>©2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;