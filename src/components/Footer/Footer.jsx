import React from "react";
import Styles from "./Footer.module.css"

const year= new Date().getFullYear();

const Footer = () => {
  return (
    <footer  className={Styles.footerCont}>
    © All rights reserved | {year}</footer>
  );
};

export default Footer;
