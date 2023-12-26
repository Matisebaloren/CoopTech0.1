import React from "react";
import styles from "./Seccion.module.css";

const Seccion = ({
  id,
  bgColor = "#fff",
  textColor = "#000000",
  imageG,
  title,
  desc,
  href = "",
  lado = false,
}) => {
  var image = (
    <div className="w-1/2 flex h-full">
      <img className={styles.img + " mx-auto my-auto"} src={imageG} alt="" />
    </div>
  );

  const BtnHref = () => {
    return (
      <a
        href={href}
        className={
          styles.boton + " w-24 p-1 ml-auto mt-4 text-center rounded-2xl"
        }
      >
        {" "}
        Ver más...
      </a>
    );
  };

  return (
    <div id={id} className={styles.contenedor} style={{ background: bgColor }}>
      {lado ? image : ""}
      <div className="w-1/2 grid content-center h-full p-4">
        <p
          className="my-auto text-white text-5xl mx-auto w-full"
          style={{ color: textColor }}
        >
          {title}
        </p>

        <p className="my-auto text-white " style={{ color: textColor }}>
          {desc}
        </p>

        {href ? <BtnHref /> : ""}
      </div>
      {!lado ? image : ""}
    </div>
  );
};

export default Seccion;
