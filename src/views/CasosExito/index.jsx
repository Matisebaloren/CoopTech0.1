import React from "react";
import styles from "./CasosExito.module.css";
import Header from "../../components/Header";

const CasosExito = () => {
  return (
    <div>
      <Header title="Casos de Éxito" />
      <div className="flex flex-col m-6 divide-y divide-dashed divide-slate-600">
        <Caso
          name="Cooperativa de Obras y Servicios Públicos Brinkmann Ltda. "
          coment="descripcion..."
          img="/src/assets/cooperativas/brikman.png"
        />
         <Caso
          name="Cooperativa de Obras y Servicios Públicos Brinkmann Ltda. "
          coment="descripcion..."
          img="/src/assets/cooperativas/brikman.png"
        />
      </div>
    </div>
  );
};

const Caso = ({ name, coment, img }) => {
  return (
    <>
      <div className="flex flex-row py-2">
        <div className="w-40 h-fit border md:border-2 mx-auto border-orange-500 rounded-lg overflow-hidden">
          <img src={img} alt="" />
        </div>
        <div className="w-4/5 pl-3">
          <p className="text-2xl mb-2">{name}</p>
          <p className="text-xl text-slate-700">{coment}</p>
        </div>
      </div>
    </>
  );
};

export default CasosExito;
