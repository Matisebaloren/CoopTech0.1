import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// imagenes
import LogoBlanco from "/src/assets/logoBlanco.png";
import OficinaVirtual from "/src/assets/servicios/oficinaVirtual.png";
import OficinaVirtual2 from "/src/assets/servicios/oficinaVirtual2.png";
import LogoSolo from "/src/assets/LogoSolo.png";

const Navbar = ({ navbarReset }) => {
  const resNav = () => {
    navbarReset(true);
  };

  const navbarRef = useRef(null);
  var navbarColor = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY == 0 &&
        expand == false &&
        navbarColor.current != null
      ) {
        navbarRef.current.classList.remove("shadow-2xl");
        navbarColor.current.style.opacity = 0;
      } else {
        if (navbarColor.current) {
          navbarRef.current.classList.add("shadow-2xl");

          navbarColor.current.style.opacity = 1;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  var expand = false;
  const expandir = () => {
    expand = !expand;
    if (expand) {
      if (navbarColor.current != null) {
        navbarColor.current.style.opacity = 1;
      }
      navbarRef.current.style.height = "100%";
    } else {
      navbarRef.current.style.height = "4rem";
      if (window.scrollY == 0) {
        navbarRef.current.classList.remove("shadow-2xl");
        navbarColor.current.style.opacity = 0;
      } else {
        navbarColor.current.style.opacity = 1;
      }
    }
  };

  return (
    <div
      id="navbar"
      ref={navbarRef}
      className={
        styles.navbar +
        " fixed w-full duration-1000 transition-all h-16 overflow-hidden top-0"
      }
    >
      <div className="w-full flex h-16">
        <div
          ref={navbarColor}
          className={
            styles.navbarColor +
            " w-full flex h-16 absolute transition-all duration-1000"
          }
          style={{ opacity: 0 }}
        ></div>
        <div className="w-3/4 px-auto flex">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={expandir}
          >
            <MenuIcon sx={{ fontSize: 30, color: "white" }} className="mx-5" />
          </IconButton>
          <Link
            onClick={resNav}
            className="my-auto mr-auto md:block hidden"
            to="/Login"
          >
            <button className=" text-white">INTRANET</button>
          </Link>
        </div>
        <div className="md:w-1/4">
          <Link onClick={resNav} className="ml-auto" to="/">
            <img src={LogoBlanco} className="h-full " alt="" />
          </Link>
        </div>
      </div>
      <Contenido resNav={resNav} />
    </div>
  );
};

const Contenido = ({ resNav }) => {
  return (
    <div
      className={
        styles.navbarContent +
        " flex flex-col overflow-scroll gap-4 md:flex-row"
      }
    >
      <div
        className={styles.section + " flex flex-col h-1/2 my-auto basis-1/4"}
      >
        <Link onClick={resNav} className="mx-auto mb-2" to="/Servicios">
          <Item text="SERVICIOS" title={true} />
        </Link>
        <Link onClick={resNav} className="mx-auto" to="/Servicios/oficina">
          <Item text=" OFICINA VIRTUAL" />
        </Link>
        <Link onClick={resNav} className="mx-auto" to="/Servicios/reconecta">
          <Item text="RECONECTA" />
        </Link>

        <Link onClick={resNav} className="mx-auto" to="/Servicios/agua">
          <Item text="+ AGUA" />
        </Link>
        <Link
          onClick={resNav}
          className="mx-auto"
          to="/Servicios/cloudServices"
        >
          <Item text="CLOUD SERVICES" />
        </Link>
        <Link onClick={resNav} className="mx-auto" to="/Servicios/provision">
          <Item text="PROVISIÓN" />
        </Link>
        <Link onClick={resNav} className="mx-auto" to="/Servicios/desarrollos">
          <Item text="DESARROLLO ESP." />
        </Link>
      </div>
      <div
        onClick={resNav}
        className={
          styles.section + " flex flex-col h-1/2 my-auto gap-2 basis-1/4"
        }
      >
        <Link onClick={resNav} className="mx-auto h-min" to="/ComoSomos">
          <Item text="ADN COOPTECH" title={true} />
        </Link>
        <Link onClick={resNav} className="mx-auto" to="/ComoSomos">
          <Item text="COMO SOMOS" />
        </Link>
        <Link onClick={resNav} className="mx-auto" to="/QuienesSomos">
          <Item text="QUIENES SOMOS" />
        </Link>
        <Link onClick={resNav} className="mx-auto" to="/Sostenibilidad">
          <Item text=" SOSTENIBILIDAD" />
        </Link>
      </div>
      <div
        className={styles.section + " flex flex-col h-1/2 my-auto basis-1/4 "}
      >
        <Link onClick={resNav} className="mx-auto h-min" to="/Exitos">
          <Item text="CASOS DE ÉXITO" title={true} />
        </Link>
        <Link onClick={resNav} className="mx-auto h-min" to="/Certificados">
          <Item text="CERTIFICACIONES Y PREMIOS" title={true} />
        </Link>
        <Link onClick={resNav} className="mx-auto h-min" to="/Noticias">
          <Item text="COMUNIDAD / NOTICIAS" title={true} />
        </Link>
        <Link onClick={resNav} className="mx-auto h-min" to="/Carrera">
          <Item text="CARRERA" title={true} />
        </Link>
        <Link
          onClick={resNav}
          className="mx-auto md:hidden block h-min"
          to="/LOGIN"
        >
          <Item text="INTRANET" title={true} />
        </Link>
      </div>
      <div
        className={
          styles.sombra1 +
          " px-5 flex flex-col basis-1/4 drop-shadow-sm "
        }
      >
        <Imagenes />
      </div>
    </div>
  );
};

const Item = ({ text = "", title = false }) => {
  var clases = "";

  if (title) {
    clases += "text-2xl text-black font-bold underline mt-5";
  } else {
    clases += "text-xl font-bold text-color1";
  }

  return (
    <button className={clases}>
      <h1>
        <KeyboardArrowRightIcon />
        {text}
      </h1>
    </button>
  );
};

const Imagenes = () => {
  const [imageId, setImageId] = useState(0);
  const img = useRef();
  var imagenesArray = [OficinaVirtual, OficinaVirtual2, LogoSolo];
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(imageId + " " + imagenesArray.length);
      if (imagenesArray.length <= imageId + 1) {
        setImageId(0);
      } else {
        setImageId(imageId + 1);
      }
      img.current.classList.add(styles.flipInX);
      setTimeout(() => img.current.classList.remove(styles.flipInX), 1000);
    }, 3000);
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [imageId]);

  return (
    <>
      <img
        ref={img}
        className={styles.imagenes + " " + styles.flipInX + " "}
        src={imagenesArray[imageId]}
        alt=""
      />
    </>
  );
};

export default Navbar;
