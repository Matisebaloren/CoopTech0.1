import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

// media
import LogoBlanco from "/src/assets/logoBlanco.png";
import LogoCoop from "/src/assets/LogoCoop.png";

const Footer = () => {
  const Pleca = () => {
    return <p className="mx-8 hidden lg:block">|</p>;
  };

  return (
    <footer className={styles.footer + " pt-10 md:px-10 px-4  flex flex-wrap"}>
      <div className="xl:w-2/3 w-full flex flex-wrap gap-2 justify-center flex-row text-white text-2xl">
        {/* <div className="flex m-auto text-center">
          
        </div> */}
        <div className={styles.divLogo + " hidden lg:block"}>
          <img className={styles.logoBlanco} src={LogoBlanco} alt="" />
        </div>
        <Pleca />
        <Link to="/Servicios">
          <p>Qué hacemos</p>
        </Link>
        <Pleca />
        <Link to="/ComoSomos">
          <p>ADN CoopTech</p>
        </Link>
        <Pleca />
        <Link to="/Exitos">
          <p>Casos de Éxito</p>
        </Link>
        <Pleca />
        <div className="my-auto flex gap-2">
          <a href="">
            <InstagramIcon />
          </a>
          <a href="">
            <LinkedInIcon />
          </a>
          <a href="">
            <WhatsAppIcon />
          </a>
          <a href="">
            <EmailIcon />
          </a>
        </div>
      </div>

      <div className="xl:w-1/3 w-full">
        <img className="mx-auto w-2/3" src={LogoCoop} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
