import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Intranet from "./views/Intranet";
import Servicios from "./views/Servicios";
import ComoSomos from "./views/ADN/ComoSomos"
import QuienesSomos from "./views/ADN/QuienesSomos"
import Sostenibilidad from "./views/ADN/Sostenibilidad";
import CasosExito from "./views/CasosExito";
import Certificados from "./views/Certificados";
import Noticias from "./views/Noticias";
import Carrera from "./views/Carrera";


function App() {
  const [updateNavbar, setUpdateNavbar] = useState(0);

  function navbarReset() {
    setUpdateNavbar(updateNavbar + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // screen.x
  }
  

  return (
    <>
      <Navbar key={updateNavbar} navbarReset={navbarReset} />
      <section>
        <Routes>
          <Route path="/" element={<Home navbarReset={navbarReset} />} />
          <Route path="/*" element={<Home navbarReset={navbarReset} />} />
          <Route path="/Login" element={<Intranet />} />
          <Route path="/Servicios" element={<Servicios/>} />
          <Route path="/Servicios/:section" element={<Servicios/>} />
          <Route path="/ComoSomos" element={<ComoSomos/>} />
          <Route path="/QuienesSomos" element={<QuienesSomos/>} />
          <Route path="/Sostenibilidad" element={<Sostenibilidad/>} />
          <Route path="/Exitos" element={<CasosExito/>} />
          <Route path="/Certificados" element={<Certificados/>} />
          <Route path="/Noticias" element={<Noticias/>} />
          <Route path="/Carrera" element={<Carrera/>} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
