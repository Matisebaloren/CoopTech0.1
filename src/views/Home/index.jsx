import React from "react";
import styles from "./Home.module.css";

const Home = ({ navbarReset }) => {

  // const handleClick = () => {
  //   navbarReset(true);
  // };

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
            className={styles.imgLogo + " m-16 mt"}
            alt=""
          />
          <h1 className="text-white text-5xl m-16">
            Forjando el futuro de manera inteligente y eficiente.
          </h1>
       
        </div>
      </div>
    </>
  );
};

export default Home;
