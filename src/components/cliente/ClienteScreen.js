import React from "react";
import search from "../../assets/search.svg";
import "./ClienteScreen.css";
import edit from "../../assets/edit.svg";
import del from "../../assets/delete.svg";
import eraser from "../../assets/eraser.svg";
import { useForm } from "./../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, startSearchCliente } from "../../actions/cliente";
import { startCloseModal, startOpenModal } from "../../actions/ui";
import ClienteModal from "./ClienteModal";

const ClienteScreen = () => {
  const active = useSelector((state) => state.cliente);

  const { nombres, cedula, telefono, email, direccion } = active;
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    cedula: "",
  });
  const handleModal = () => {
    dispatch(startOpenModal());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startSearchCliente(values));
  };
  const handleEraser = (e) => {
    dispatch(clearSearch());
    reset();
    dispatch(startCloseModal());
  };
  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <h2 className="search__title">Administracion de Clientes</h2>
        <label className="search__label">Ingrese la cedula</label>
        <input
          className="search__input"
          type="text"
          placeholder="Cedula"
          name="cedula"
          value={values.cedula}
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
              <th>Nombres</th>
              <th>Cédula</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Dirección</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {active._id ? (
            <tbody>
              <tr>
                <td>{nombres}</td>
                <td>{cedula}</td>
                <td>{telefono}</td>
                <td>{email}</td>
                <td>{direccion}</td>
                <td>
                  <button className="search_btn" onClick={handleModal}>
                    <img src={edit} alt="edit" />
                    Editar
                  </button>
                  <button className="search_btn">
                    <img src={del} alt="del" />
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td>Sin Datos</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      <ClienteModal handleEraser={handleEraser} />
    </div>
  );
};

export default ClienteScreen;
