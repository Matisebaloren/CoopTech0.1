import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Intranet from "./views/Intranet";
import Servicios from "./views/Servicios";

function App() {
  const [updateNavbar, setUpdateNavbar] = useState(0);

  function navbarReset() {
    setUpdateNavbar(updateNavbar + 1);
  }

  return (
    <>
      <Navbar key={updateNavbar} navbarReset={navbarReset} />
      <section className="mt-16">
        <Routes>
          <Route path="/" element={<Home navbarReset={navbarReset} />} />
          <Route path="/*" element={<Home navbarReset={navbarReset} />} />
          <Route path="/Login" element={<Intranet />} />
          <Route path="/Servicios" element={<Servicios/>} />
          <Route path="/Servicios/:id" element={<Servicios/>} />
        </Routes>
      </section>

      <Footer />
    </>
  );
}

export default App;
