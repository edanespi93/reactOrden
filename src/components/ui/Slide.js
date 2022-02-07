import React from "react";
import "./Slide.css";
import logo from "../../assets/dashboard.svg";
import user from "../../assets/user.svg";
import desktop from "../../assets/desktop.svg";
import newOrden from "../../assets/new.svg";
import search from "../../assets/search.svg";
import img from "../../assets/logout.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

const Slide = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
  };
  return (
    <>
      <div className="slide">
        <div className="slide__head">
          <p>
            <span>Admin</span>
          </p>
          <p onClick={handleLogout}>
            <img className="aside__logout" src={img} alt="img" />
            <span> Salir</span>
          </p>
        </div>

        <div className="aside__menu">
          <ul className="aside__ul">
            <li className="aside__li">
              <img src={logo} alt="img" />
              <Link to="/"> Inicio</Link>
            </li>
            <li className="aside__li">
              <img src={user} alt="img" />
              <Link to="/clientes"> Clientes</Link>
            </li>
            <li className="aside__li">
              <img src={newOrden} alt="img" />
              <Link to="/new"> Nueva orden de Trabajo</Link>
            </li>
            <li className="aside__li">
              <img src={desktop} alt="img" />
              <Link to="/equipos"> Equipos Informaticos</Link>
            </li>
            <li className="aside__li">
              <img src={search} alt="img" />
              <Link to="/search"> Consultar Pendientes</Link>
            </li>
          </ul>
        </div>
        <footer className="slide__footer">
          <p>Copyright © Todos los derechos reservados 2022</p>
        </footer>
      </div>
    </>
  );
};

export default Slide;
