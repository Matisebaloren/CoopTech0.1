import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ title, desc, img="/src/assets/servicios/oficinaVirtual.png", seccion}) => {
  return (
    <Link className="mx-auto w-full h-full border-2 border-orange-500" to={"/Servicios/" + seccion}>
      
        <div className="border-2 border-orange-200 flex w-full h-80">
          <img className={styles.imagen + " mx-auto my-auto"} src={img} alt="" />
        </div>
        <div className="p-5">
          <p className="mb-2 font-bold text-2xl font-extralight">{title}</p>
          <p className="text-xl">{desc}</p>
        </div>
      
    </Link>
  );
};

export default Card;
