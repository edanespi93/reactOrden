import React from "react";
import search from "../../assets/search.svg";
import "../cliente/ClienteScreen.css";
import eraser from "../../assets/eraser.svg";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "./../../hooks/useForm";
import { clearArticulo, startGetArticulos } from "./../../actions/articulo";
import EquipoRows from "./EquipoRows";

const EquipoScreen = () => {
  const dispatch = useDispatch();
  const { articulos } = useSelector((state) => state.articulo);
  const [value, handleInputChange, reset] = useForm({
    cedula: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startGetArticulos(value));
  };
  const handleEraser = (e) => {
    dispatch(clearArticulo());
    reset();
  };
  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <h2 className="search__title">
          Administración de Equipos Informaticos
        </h2>
        <label className="search__label">Ingrese la cedula del cliente</label>
        <input
          className="search__input"
          type="text"
          placeholder="Cedula"
          name="cedula"
          value={value.cedula}
          onChange={handleInputChange}
        />
        <button className="search__button" type="submit">
          <img src={search} alt="img" /> Buscar
        </button>
        <button className="search__button" type="reset" onClick={handleEraser}>
          <img src={eraser} alt="img" /> Limpiar Busqueda
        </button>
      </form>
      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Marca</th>
              <th>Serie</th>
              <th>Estado</th>
              <th>Observaciones</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {articulos.length === 0 ? (
              <tr>
                <td>Sin datos</td>
              </tr>
            ) : (
              articulos.map((articulo) => (
                <EquipoRows key={articulo._id} articulo={articulo} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EquipoScreen;
