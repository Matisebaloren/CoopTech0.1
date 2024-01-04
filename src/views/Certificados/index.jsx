import React from 'react'
import styles from "./Certificados.module.css"
import Header from '../../components/Header'


const Certificados = () => {
  return (
    <div>
      <Header title="Certificados y Premios" subtitle="Trabajamos uniendo tecnología y personas para impulsar negocios" />
      <p className="mx-12 font-extralight text-2xl text-center underline">Acompañan nuestra trayectoria y experiencia las siguientes condecoraciones:</p>
      <div className="flex flex-col m-6 divide-y divide-dashed divide-slate-600">
      <Caso
          name="Certificado de Excelencia Cooperativa"
          content="Logros Destacados:
          @br•Promoción de la participación activa de los miembros.
          @br•Implementación de prácticas sostenibles y éticas.
          @br•Contribución significativa al desarrollo comunitario."
          img="/src/assets/medalla.png"
        />
        <Caso
          name="Certificado de Innovación Cooperativa"
          content="Logros Destacados:

          @br•Desarrollo e implementación de soluciones innovadoras para abordar desafíos cooperativos.
          @br•Adopción de tecnologías avanzadas para mejorar la eficiencia y la participación de los miembros.
          @br•Colaboración activa en iniciativas de investigación y desarrollo dentro del ámbito cooperativo."
          img="/src/assets/diploma.png"
        />
      </div>
    </div>
  )
}

const Caso = ({ name, content, img }) => {

  const contentArray = content.split('@br');

  return (
    <>
      <div className="flex flex-row py-2">
        <div className="w-40 h-fit border md:border-2 mx-auto border-orange-500 rounded-lg overflow-hidden">
          <img src={img} alt="" />
        </div>
        <div className="w-4/5 pl-3">
          <p className="text-2xl mb-2">{name}</p>
          {contentArray.map((fragmento, index) => (
            <p key={index} className="text-xl text-slate-700">{fragmento}</p>
          ))}
        </div>
      </div>
    </>
  );
};


export default Certificados