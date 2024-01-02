import React from "react";
import styles from "./Home.module.css";

const Home = ({ navbarReset }) => {
  return (
    <>
      <div className={styles.divVideo}>
        <video
          className={styles.sectionVideo}
          src="src/assets/video1.mp4"
          autoplay="true"
          muted="true"
          loop="true"
        ></video>
        
        <div className="my-auto">
          <img
            src="src/assets/LogoSinFondoSombra2.png"
            className={" w-full lg:w-2/5 md:w-3/5 p-16 mt"}
            alt=""
          />
          <h1 className="text-white text-4xl lg:text-6xl w-full lg:w-2/3 font-extralight px-10 lg:px-16">
            Para evolucionar los servicios esenciales, con adaptabilidad y
            escalabilidad. 
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
