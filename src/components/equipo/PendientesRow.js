import React from "react";

const PendientesRow = ({ pendiente }) => {
  const { cliente, equipo, marca, serie, estado } = pendiente;
  const { nombres, telefono } = cliente;
  return (
    <tr>
      <td>{nombres}</td>
      <td>{telefono}</td>
      <td>{equipo}</td>
      <td>{marca}</td>
      <td>{serie}</td>

      <td style={{ color: "red" }}>{estado ? "Entregado" : "Pendiente"}</td>
    </tr>
  );
};

export default PendientesRow;
