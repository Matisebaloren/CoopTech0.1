import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const Pleca = () => {
    return <p className="mx-8 hidden lg:block">|</p>;
  };

  return (
    <footer className={styles.footer + " pt-10 md:px-10 px-4  flex flex-wrap"}>
      <div className="xl:w-2/3 w-full flex flex-wrap gap-2 flex-row text-white text-2xl">
        {/* <div className="flex m-auto text-center">
          
        </div> */}
        <div className={styles.divLogo + " hidden lg:block"}>
          <img
            className={styles.logoBlanco}
            src="/src/assets/logoBlanco.png"
            alt=""
          />
        </div>
        <Pleca />
        <a href="/Servicios">Qué hacemos</a>
        <Pleca />
        <a href="">ADN CoopTech</a>
        <Pleca />
        <a href="">Casos de exito</a>
      </div>

      <div className="xl:w-1/3 w-full">
        <img className="mx-auto w-2/3" src="/src/assets/LogoCoop.png" alt="" />
      </div>
    </footer>
  );
};


export default Footer;
