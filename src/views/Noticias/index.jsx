import React from "react";
import styles from "./Noticias.module.css";
import Header from "../../components/Header";

// media
import ImagenIcon from "/src/assets/imagenIcon.png";
import Noticia from "/src/assets/noticia.jpg";


const Noticias = () => {
  return (
    <div>
      <Header title="Comunidad / Noticias" img={Noticia} />
      {/* <div className="flex flex-col m-6 divide-y divide-dashed divide-slate-600"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mx-10 md:mx-20 mb-20">
        <Caso
          name="Diseño Renovado: La Página Estrena una Interfaz Moderna y Amigable"
          content="En respuesta a los comentarios de los usuarios, la plataforma ha revelado un diseño completamente renovado. La nueva interfaz combina estética moderna con una navegación más intuitiva, ofreciendo a los usuarios una experiencia aún más agradable y eficiente."
        />
        <Caso
          name="La Plataforma Innovadora Lanza Nuevas Funcionalidades para Facilitar la Colaboración"
          content="En una emocionante actualización, la plataforma líder ha introducido funciones revolucionarias que potenciarán la colaboración entre usuarios. Desde herramientas de edición en tiempo real hasta opciones de personalización avanzada, la plataforma está redefiniendo la forma en que los usuarios interactúan y comparten información."
        />
      </div>
    </div>
  );
};

const Caso = ({ name, content = "", img = ImagenIcon }) => {
  const contentArray = content.split("@br");

  return (
    <>
      <div className="flex flex-col border-2 border-orange-400 rounded-lg">
        <div className="w-full h-72 border flex shadow-lg md:border-2 mx-0 border-slate-500 rounded-lg overflow-hidden">
          <img
            className="h-full w-max self-center py-auto mx-auto"
            src={img}
            alt=""
          />
        </div>
        <div className=" my-4 px-3">
          <p className="text-2xl font-bold mb-4">{name}</p>
          {contentArray.map((fragmento, index) => (
            <p key={index} className="text-xl font-extralight text-slate-900">
              {fragmento}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Noticias;
