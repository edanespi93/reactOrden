import React from "react";
import search from "../../assets/search.svg";
import "../cliente/ClienteScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { startloadPendientes } from "../../actions/pendientes";
import PendientesRow from "./PendientesRow";

const ConsultarPendientes = () => {
  const dispatch = useDispatch();
  const { pendientes } = useSelector((state) => state.pendiente);

  const handlePendientes = () => {
    dispatch(startloadPendientes());
  };
  return (
    <div className="search">
      <div className="search__form">
        <h2 className="search__title">Consultar Trabajos pendientes</h2>

        <button className="search__button" onClick={handlePendientes}>
          <img src={search} alt="img" /> Listar Pendientes
        </button>
      </div>
      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Telefono</th>
              <th>Equipo</th>
              <th>Marca</th>
              <th>Serie</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {pendientes.length < 1 ? (
              <tr>
                <td>Sin Datos</td>
              </tr>
            ) : (
              pendientes.map((pendiente) => (
                <PendientesRow key={pendiente._id} pendiente={pendiente} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsultarPendientes;
