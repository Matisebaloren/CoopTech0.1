import React from "react";
import styles from "./Header.module.css";

const Header = ({title}) => {
  return (
    <div className={styles.header}>
      <div className={styles.blackcover+ " flex"} >
        <h1 className="mx-auto my-auto ">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
