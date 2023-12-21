import React, { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Navbar = () => {
  const navbarRef = useRef(null);

  var expand = false;
  const expandir = () => {
    expand = !expand;
    if (expand) {
      console.log(screen.width);
      if (screen.width > 767) {
        navbarRef.current.style.height = "18rem";
      } else {
        navbarRef.current.style.height = screen.height + "px";
      }
    } else {
      navbarRef.current.style.height = "4rem";
    }
  };

  return (
    <div
      id="navbar"
      ref={navbarRef}
      style={{ height: "4rem" }}
      className="fixed w-full duration-300 transition-all h-16 bg-color1 overflow-hidden top-0"
    >
      <div className={"w-full flex " + styles.hNavbar}>
        <div className="w-1/2 px-auto flex">
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
          <Link className="my-auto mr-auto" to="/Login">
            <button className=" text-white">INTRANET</button>
          </Link>
        </div>
        <div className="w-1/2">
          <Link to="/">
            <img
              src="src/assets/logoBlanco.png"
              className="w-40 mx-auto"
              alt=""
            />
          </Link>
        </div>
      </div>

      <Contenido />
    </div>
  );
};

const Contenido = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className={styles.section + " grid basis-1/4"}>
        <Link className="mx-auto mb-2" to="/Servicios">
          <button className="text-xl font-semibold text-color2">
            <KeyboardArrowRightIcon />
            SERVICIOS
          </button>
        </Link>
        <Link className="mx-auto" to="/Servicios">
          <button className="text-white">
            <h1>
              <KeyboardArrowRightIcon />
              OFICINA VIRTUAL
            </h1>
          </button>
        </Link>
        <Link className="mx-auto" to="/Servicios">
          <button className="text-white">
            <h1>
              <KeyboardArrowRightIcon />
              RECONECTA
            </h1>
          </button>
        </Link>
        <Link className="mx-auto" to="/Servicios">
          <button className="text-white">
            <h1>
              <KeyboardArrowRightIcon />+ AGUA
            </h1>
          </button>
        </Link>
        <Link className="mx-auto" to="/Servicios">
          <button className="text-white">
            <h1>
              <KeyboardArrowRightIcon />
              CLOUD SERVICES
            </h1>
          </button>
        </Link>
        <Link className="mx-auto" to="/Servicios">
          <button className="text-white">
            <h1>
              <KeyboardArrowRightIcon />
              PROVISIÓN
            </h1>
          </button>
        </Link>
        <Link className="mx-auto" to="/Servicios">
          <button className="text-white">
            <h1>
              <KeyboardArrowRightIcon />
              DESARROLLO ESP.
            </h1>
          </button>
        </Link>
      </div>
      <div className={styles.section + " grid gap-2 basis-1/3"}>
        <Link className="mx-auto mb-2" to="/Servicio">
          <button className="text-xl font-semibold text-color2">
            <KeyboardArrowRightIcon />
            ADN COOPTECH
          </button>
        </Link>
        <Link className="mx-auto" to="/Adn">
          <button className="text-white">
            <h1>
              <KeyboardArrowRightIcon />
              QUIENES SOMOS
            </h1>
          </button>
        </Link>
        <Link className="mx-auto" to="/Adn">
          <button className="text-white">
            <h1>
              <KeyboardArrowRightIcon />
              COMO SOMOS
            </h1>
          </button>
        </Link>
        <Link className="mx-auto" to="/Adn">
          <button className="text-white">
            <h1>
              <KeyboardArrowRightIcon />
              SOSTENIBILIDAD
            </h1>
          </button>
        </Link>
      </div>
      <div className={styles.section + " grid gap-2 basis-1/3 "}>
        <Link className="mx-auto mb-2" to="/Servicio">
          <button className="text-xl font-semibold text-color2">
            <KeyboardArrowRightIcon />
            CASOS DE EXITO
          </button>
        </Link>
        <Link className="mx-auto mb-2" to="/Servicio">
          <button className="text-xl font-semibold text-color2">
            <KeyboardArrowRightIcon />
            CARRERA
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
