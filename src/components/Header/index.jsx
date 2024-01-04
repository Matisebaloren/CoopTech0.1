import React from "react";
import styles from "./Header.module.css";

import GrupoTrabajo from "/src/assets/grupoTrabajo1.jpg";

const Header = ({ title,subtitle, img=GrupoTrabajo}) => {
  return (
    <div className={styles.header} style={{backgroundImage:`url(${img})`}}>
      <div className={styles.blackcover + " flex"}>
        <div className="flex flex-col w-full my-auto">
          <h1 className="mx-auto text-6xl">{title}</h1>
          <h1 className="mx-auto text-2xl">{subtitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
