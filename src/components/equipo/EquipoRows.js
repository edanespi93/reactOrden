import React from "react";
import edit from "../../assets/edit.svg";
import del from "../../assets/delete.svg";
import eject from "../../assets/eject.svg";
import { startEntregarArticulo } from "../../actions/articulo";
import { useDispatch } from "react-redux";

const EquipoRows = ({ articulo }) => {
  const dispatch = useDispatch();
  const { equipo, marca, serie, observaciones, estado } = articulo;
  const handleEntrega = () => {
    dispatch(startEntregarArticulo(articulo));
  };
  return (
    <tr>
      <td>{equipo}</td>
      <td>{marca}</td>
      <td>{serie}</td>
      {estado ? (
        <td style={{ color: "green" }}>Entregado</td>
      ) : (
        <td style={{ color: "red" }}>Pendiente</td>
      )}
      <td>{observaciones}</td>
      <td>
        {estado || (
          <button className="search_btn" onClick={handleEntrega}>
            <img src={eject} alt="edit" />
            Entregar
          </button>
        )}
        {estado || (
          <button className="search_btn">
            <img src={edit} alt="edit" />
            Editar el artículo
          </button>
        )}
        <button className="search_btn">
          <img src={del} alt="edit" />
          Eliminar el artículo
        </button>
      </td>
    </tr>
  );
};

export default EquipoRows;
