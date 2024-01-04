import React, { useEffect, useState } from "react";
import styles from "./CasosExito.module.css";
import Header from "../../components/Header";

// media
import Brikman from "/src/assets/cooperativas/brikman.png";
import PaquitaTambero from "/src/assets/cooperativas/coopPaquitaTambero.png";
import SanFrancisco from "/src/assets/cooperativas/sanFrancisco.png";
import Suardi from "/src/assets/cooperativas/Suardi.jpeg";
import SanGuillermo from "/src/assets/cooperativas/SanGuillermo.png";
import Eusebia from "/src/assets/cooperativas/eusebia.jpeg";
import Chipion from "/src/assets/cooperativas/AltosChipion.png";
import Portena from "/src/assets/cooperativas/portena.jpg";

// carousel
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const CasosExito = () => {
  const [slides, setSlides] = useState(5);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setSlides(3);
      } else if (window.innerWidth < 1200){
        setSlides(4);
      }
      else{
        setSlides(5);
      }
    };

    window.addEventListener("resize", handleResize);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Header
        title="Casos de Éxito"
        subtitle="Trabajamos uniendo tecnología y personas para impulsar negocios"
      />
      {/* <p className="mx-12 font-extralight text-2xl text-center underline">Trabajamos uniendo tecnología y personas para impulsar negocios</p> */}

      <div className="h-86 mx-4 mb-8">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={slides}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Caso
              name="Cooperativa de Obras y Servicios Públicos Brinkmann Ltda. "
              img={Brikman}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Caso
              name="Cooperativa de Tamberos Ltda. La Selecta"
              img={PaquitaTambero}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Caso
              name="Cooperativa San Francisco – Fresh Fruit"
              img={SanFrancisco}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Caso name="Cooperativa Telefonica de Suardi" img={Suardi} />
          </SwiperSlide>
          <SwiperSlide>
            <Caso
              name="Cooperativa de Provisión y Servicios Públicos y Vivienda San Guillermo Ltda"
              img={SanGuillermo}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Caso name="Cooperativa de Teléfonos Eusebia" img={Eusebia} />
          </SwiperSlide>
          <SwiperSlide>
            <Caso
              name="Cooperativa de Servicios Públicos Altos de Chipión Limitada"
              img={Chipion}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Caso
              name="Cooperativa Ganadera Agrícola y de Consumo Porteña"
              img={Portena}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const Caso = ({ name, img }) => {
  return (
    <>
      <div className="flex flex-col rounded-lg border h-80 md:border-2 border-orange-500 ">
        <div className="w-full h-2/3 mx-auto flex">
          <img
            className="mx-auto max-h-full max-w-full my-auto"
            src={img}
            alt=""
          />
        </div>
        <div className="w-full flex h-1/3 px-3">
          <p className="text-xl my-auto font-extralight text-center ">{name}</p>
        </div>
      </div>
    </>
  );
};

export default CasosExito;
