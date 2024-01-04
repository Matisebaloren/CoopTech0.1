import React, { useEffect, useState } from "react";
import Seccion from "../../components/Seccion";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { FaCode } from "react-icons/fa6";

// media
import OficinaVirtual from "/src/assets/servicios/oficinaVirtual.png";
import ServiciosBg from "/src/assets/ServicioBg.jpeg";

const Servicios = () => {
  const { section } = useParams();
  // const [seccion, setSeccion] = useState({id});

  useEffect(() => {
    const elementoObjetivo = document.getElementById(section);
    if (elementoObjetivo) {
      const posicionInicial =
        elementoObjetivo.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: posicionInicial - 70,
        behavior: "smooth",
      });
    }
  }, [section]);

  return (
    <>
      <Header title="Servicios" img={ServiciosBg} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 mx-10 md:mx-20 mb-20">
        <Card
          title="OFICINA VIRTUAL"
          desc="Descripción del Servicio..."
          img={OficinaVirtual}
          seccion="oficina"
        />
        <Card
          title="RECONECTA"
          desc="Descripción del Servicio..."
          img={OficinaVirtual}
          seccion="reconecta"
        />
        <Card
          title="+ AGUA"
          desc="Descripción del Servicio..."
          img={OficinaVirtual}
          seccion="agua"
        />
        <Card
          title="CLOUD SERVICES"
          desc="Descripción del Servicio..."
          img={OficinaVirtual}
          seccion="cloudServices"
        />
        <Card
          title="PROVISIÓN"
          desc="Descripción del Servicio..."
          img={OficinaVirtual}
          seccion="provision"
        />
        <Card
          title="DESARROLLOS ESPECIALES"
          desc="Descripción del Servicio..."
          img={OficinaVirtual}
          seccion="desarrollos"
        />
      </div>
      <Seccion
        id="oficina"
        textColor="white"
        bgColor="#004976"
        imageG={OficinaVirtual}
        title="Oficina Virtual"
        desc="Aprovechá todos los beneficios que tiene!
Una forma distinta y nueva de administrar tus servicios..."
        lado={true}
        href="https://app.coopmorteros.coop/"
      />
      <Seccion
        id="reconecta"
        title="Reconecta"
        imageG={OficinaVirtual}
        desc="Software diseñado para el control remoto y monitoreo de reconectadores de media tensión."
        lado={false}
      />
      <Seccion
        id="agua"
        title="+ Agua"
        desc="...Descripcion..."
        lado={true}
        bgColor="#326d91"
        imageG={OficinaVirtual}
        textColor="white"
      />
      <Seccion
        id="cloudServices"
        title="Cloud Services"
        imageG={OficinaVirtual}
        desc="...Descripcion..."
        lado={false}
      />
      <Seccion
        id="provision"
        title="Provisión"
        imageG={OficinaVirtual}
        desc="...Descripcion..."
        bgColor="#004976"
        lado={true}
        textColor="white"
      />
      <Seccion
        id="desarrollos"
        title="Desarrollos Especiales"
        imageG={OficinaVirtual}
        desc="...Descripcion..."
        lado={false}
      />
    </>
  );
};

export default Servicios;
