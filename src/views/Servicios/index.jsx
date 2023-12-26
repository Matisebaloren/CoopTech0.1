import React, { useEffect, useState } from "react";
import Seccion from "../../components/Seccion";
import { useParams } from "react-router-dom";

const Servicios = () => {
  const { id } = useParams();
  // const [seccion, setSeccion] = useState({id});

  useEffect(() => {
    const elementoObjetivo = document.getElementById(id);
    if (elementoObjetivo) {
      const posicionInicial = elementoObjetivo.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: posicionInicial - 70,
        behavior: "smooth"
      });
    }
  }, [id])


  
 
  return (
    <>
      <Seccion
        id="oficina"
        textColor="white"
        bgColor="#004976"
        imageG="src/assets/servicios/oficinaVirtual.png"
        title="Oficina Virtual"
        desc="Aprovechá todos los beneficios que tiene!
Una forma distinta y nueva de administrar tus servicios..."
        lado={true}
        href="https://app.coopmorteros.coop/"
      />
      <Seccion
        id="reconecta"
        title="Reconecta"
        imageG="src/assets/servicios/oficinaVirtual.png"
        desc="Software diseñado para el control remoto y monitoreo de reconectadores de media tensión."
        lado={false}
      />
      <Seccion
        id="agua"
        title="+ Agua"
        desc="...Descripcion..."
        lado={true}
        bgColor="#326d91"
        imageG="src/assets/servicios/oficinaVirtual.png"
        textColor="white"
      />
      <Seccion
        id="CludServices"
        title="Cloud Services"
        imageG="src/assets/servicios/oficinaVirtual.png"
        desc="...Descripcion..."
        lado={false}
      />
      <Seccion
        id="provision"
        title="Provisión"
        imageG="src/assets/servicios/oficinaVirtual.png"
        desc="...Descripcion..."
        bgColor="#004976"
        lado={true}
        textColor="white"
      />
      <Seccion
        id="desarrollos"
        title="Desarrollos Especiales"
        imageG="src/assets/servicios/oficinaVirtual.png"
        desc="...Descripcion..."
        lado={false}
      />
    </>
  );
  
};

export default Servicios;
