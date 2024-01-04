import React from "react";
import Header from "../../components/Header";

const QuienesSomos = () => {
  return (
    <div>
      <Header title="Nuestro ADN" subtitle="Quienes Somos" />

      {/* <h1 className="text-slate-600 text-4xl w-full mb-3 text-center">
        Quienes Somos:
      </h1> */}
      <div className="w-2/3">
        <h1 className="text-slate-800 md:text-3xl text-lg font-extralight m-10">
          Nuestros talentos, evolucionan los negocios. 
          <p className="mt-2">
            Nos especializamos en el desarrollo de soluciones integrales, tanto
            de software como de hardware, para el monitoreo, control y gestión
            de sistemas complejos: redes eléctricas, de agua potable,
            telecomunicaciones y sistemas de gestión operativa del equipo de
            trabajo, abordando desafíos comunes en empresas y organizaciones que
            ofrecen servicios esenciales. 
          </p>
        </h1>
      </div>
      <div className="w-1/3"></div>
    </div>
  );
};

export default QuienesSomos;
