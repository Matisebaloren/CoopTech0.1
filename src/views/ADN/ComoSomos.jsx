import React from "react";
// import Seccion from "../../components/Seccion";
import Header from "../../components/Header";
import styles from "./ADN.module.css";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SwitchAccessShortcutAddIcon from "@mui/icons-material/SwitchAccessShortcutAdd";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

// media

const ComoSomos = () => {
  return (
    <div>
      <Header title="Nuestro ADN" subtitle="Como Somos" />

      <div className="flex flex-wrap my-8">
        {/* <h1 className="text-slate-600 text-4xl w-full mb-3 md:w-1/3 self-center text-center">
          Como Somos:
        </h1> */}
        {/* <p className=" w-full text-slate-800 text-xl text-left px-5">
          Nuestro compromiso va más allá de la tecnología: buscamos generar
          bienestar en las personas, mediante servicios de calidad y accesibles,
          a través de la tecnología y la innovación.
        </p> */}
        <p className=" w-full text-slate-800 text-3xl font-light text-center px-8">
          Nuestro compromiso va más allá de la tecnología: buscamos generar
          bienestar en las personas, mediante servicios de calidad y accesibles,
          a través de la tecnología y la innovación.
        </p>
      </div>

      <p className=" text-center text-2xl mt-5 text-slate-600 mb-3">
        Nuestros Valores:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8">
        <Item
          icon={<GroupAddIcon fontSize="large" />}
          title="Responsabilidad Social"
          text="Comprometidos con el impacto positivo en las personas y el entorno en el que operamos."
        />
        <Item
          icon={<ConnectWithoutContactIcon fontSize="large" />}
          title="Cercanía y Calidez"
          text="Valoramos la atención personalizada y el trato humano en todas nuestras interacciones."
        />
        <Item
          icon={<Diversity3Icon fontSize="large" />}
          title="Honestidad del Equipo de Trabajo"
          text="La transparencia y la integridad son la base de nuestras relaciones profesionales."
        />
        <Item
          icon={<SwitchAccessShortcutAddIcon fontSize="large" />}
          title="Innovación e Iniciativa"
          text="Buscamos constantemente nuevas formas de mejorar y crecer, promoviendo la creatividad y la iniciativa en nuestro equipo."
        />
      </div>

      <h1 className="text-slate-800 md:text-4xl text-lg font-extralight m-10">
        Impulsamos la transformación digital en el ámbito de los servicios
        esenciales, y ofrecemos soluciones adaptadas y escalables en constante
        evolución, con el propósito de llevar nuestro impacto positivo y
        duradero a personas de otras localidades. 
      </h1>
    </div>
  );
};

const Item = ({ title, text, icon }) => {
  return (
    <div className="p-10 transition-all duration-300 border-orange-300 border-2">
      <div className="text-3xl text-center">{icon}</div>
      <p className="font text-xl mb-2 text-center">{title}</p>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default ComoSomos;
