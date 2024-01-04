import React from "react";
import styles from "./Home.module.css";

// media
import Fondo from "/src/assets/city6.jpeg";
import LogoShadow from "/src/assets/LogoSinFondoSombra2.png";

const Home = ({ navbarReset }) => {
  return (
    <>
      <div className={styles.divVideo}>
        {/* <video
          className={styles.sectionVideo}
          src={Video}
          autoplay="true"
          muted="true"
          loop="true"
        ></video> */}
        <img className={styles.sectionImage} src={Fondo} alt="" />


        <div className="my-auto">
          <img
            src={LogoShadow}
            className={" w-full lg:w-2/5 md:w-3/5 p-16 mt"}
            alt=""
          />
          <h1 className={styles.textShadow + " text-white text-4xl lg:text-6xl w-full lg:w-2/3 font-extralight px-10 lg:px-16"}>
            Para evolucionar los servicios esenciales, con adaptabilidad y
            escalabilidad. 
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
