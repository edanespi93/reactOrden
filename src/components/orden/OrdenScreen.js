import React from "react";
import Slide from "../ui/Slide";
import EquipoScreen from "../equipo/EquipoScreen";
import "./OrdenScreen.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ClienteScreen from "./../cliente/ClienteScreen";
import NewOrden from "./NewOrden";
import ConsultarPendientes from "./../equipo/ConsultarPendientes";
import logo from "../../assets/unnamed.jpg";

const OrdenScreen = () => {
  let hiden = false;
  return (
    <div className="orden">
      <section className="orden__navigate">
        <Slide />
      </section>
      <section className="orden__menu">
        {hiden && (
          <div>
            <h2>Bienvenidos</h2>
            <img src={logo} alt="img" />
          </div>
        )}
        <Routes>
          <Route path="equipos" element={<EquipoScreen />} />
          <Route path="clientes" element={<ClienteScreen />} />
          <Route path="new" element={<NewOrden />} />
          <Route path="search" element={<ConsultarPendientes />} />
        </Routes>
      </section>
    </div>
  );
};

export default OrdenScreen;
