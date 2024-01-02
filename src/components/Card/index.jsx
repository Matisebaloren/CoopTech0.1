import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ title, desc, img, seccion}) => {
  return (
    <Link className="ml-auto" to={"/Servicios/" + seccion}>
      <div className="w-full border-2 border-orange-500">
        <img className="w-full h-80" src="" alt={img} />
        <div className="p-5">
          <p className="mb-2 font-bold text-2xl">{title}</p>
          <p className="text-xl">{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
