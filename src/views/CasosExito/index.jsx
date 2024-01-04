import React from "react";
import styles from "./CasosExito.module.css";
import Header from "../../components/Header";

const CasosExito = () => {
  return (
    <div>
      <Header title="Casos de Éxito" subtitle="Trabajamos uniendo tecnología y personas para impulsar negocios" />
      <p className="mx-12 font-extralight text-2xl text-center underline">Trabajamos uniendo tecnología y personas para impulsar negocios</p>
      <div className="flex flex-col m-6 divide-y divide-dashed divide-slate-600">
        <Caso
          name="Cooperativa de Obras y Servicios Públicos Brinkmann Ltda. "
          coment="Queremos expresar nuestro agradecimiento a la plataforma por proporcionar servicios excepcionales que han transformado por completo nuestra forma de colaborar. La variedad de herramientas avanzadas y la interfaz intuitiva han impulsado la eficiencia de nuestro equipo, permitiéndonos llevar a cabo proyectos de manera más efectiva y colaborar de manera más estrecha."
          img="/src/assets/cooperativas/brikman.png"
        />
         <Caso
          name="Cooperativa de Tamberos Ltda. La Selecta"
          coment="La reciente actualización de funciones ha sido especialmente impactante, brindándonos la capacidad de personalizar nuestras interacciones y facilitar aún más la comunicación en tiempo real. Además, el diseño renovado ha mejorado significativamente la experiencia del usuario, haciéndola más atractiva y fácil de usar."
          img="/src/assets/cooperativas/coopPaquitaTambero.png"
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
