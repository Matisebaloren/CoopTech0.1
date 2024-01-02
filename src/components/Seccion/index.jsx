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
  const Image = ({ phone = false }) => {
    var clases = "md:w-1/2 w-full flex md:h-full h-1/2 ";
    if (phone == false) {
      clases += " md:flex hidden";
    } else {
      clases += "md:hidden";
    }

    return (
      <div className={clases}>
        <img className={styles.img + " mx-auto my-auto"} src={imageG} alt="" />
      </div>
    );
  };

  const BtnHref = () => {
    return (
      <a
        href={href}
        className={
          styles.boton + " w-24 p-1 mx-auto mt-8 text-center rounded-2xl"
        }
      >
        {" "}
        Ver más...
      </a>
    );
  };

  return (
    <div
      id={id}
      className={styles.contenedor + " flex flex-row flex-wrap py-8"}
      style={{ background: bgColor }}
    >
      <Image phone={true} />
      {lado ? <Image /> : ""}
      <div className="md:w-1/2 grid content-center md:h-full h-1/2 p-12">
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
      {!lado ? <Image /> : ""}
    </div>
  );
};

export default Seccion;
