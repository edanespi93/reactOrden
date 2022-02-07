import React from "react";
import Swal from "sweetalert2";
import { fetchHelp } from "../../helpers/fetch";
import { useForm } from "../../hooks/useForm";

const NewOrden = () => {
  const [value, handleInputChange, reset] = useForm({
    nombres: "",
    cedula: "",
    telefono: "",
    email: "",
    direccion: "",
    equipo: "",
    marca: "",
    modelo: "",
    serie: "",
    observaciones: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetchHelp("cliente", value, "POST");
    const data = await res.json();
    if (data.ok) {
      Swal.fire("Ok", "Orden almacenada correctamente", "success");
      reset();
      return;
    } else {
      return Swal.fire("error", "Ocurrio un error revise los datos", "error");
    }
  };

  return (
    <form className="form__orden" onSubmit={handleSubmit}>
      <div className="form__title">
        <h3>Ingresar detalles de la nueva orden</h3>
      </div>
      <div className="form__new">
        <div className="form__cliente">
          <h3>Detalles del Cliente</h3>
          <input
            className="form__input"
            type="text"
            placeholder="Ingrese nombres del cliente"
            name="nombres"
            value={value.nombres}
            onChange={handleInputChange}
          />
          <input
            className="form__input"
            type="text"
            placeholder="Ingrese cedula"
            name="cedula"
            value={value.cedula}
            onChange={handleInputChange}
          />
          <input
            className="form__input"
            type="text"
            placeholder="Ingrese numero de telefono"
            name="telefono"
            value={value.telefono}
            onChange={handleInputChange}
          />
          <input
            className="form__input"
            type="text"
            placeholder="Ingrese correo electronico"
            name="email"
            value={value.email}
            onChange={handleInputChange}
          />
          <input
            className="form__input"
            type="text"
            placeholder="Ingrese direción"
            name="direccion"
            value={value.direccion}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__cliente">
          <h3>Detalles del Equipo</h3>
          <input
            className="form__input"
            type="text"
            placeholder="Ingrese el tipo de equipo"
            name="equipo"
            value={value.equipo}
            onChange={handleInputChange}
          />
          <input
            className="form__input"
            type="text"
            placeholder="Ingrese la marca"
            name="marca"
            value={value.marca}
            onChange={handleInputChange}
          />
          <input
            className="form__input"
            type="text"
            placeholder="Ingrese la serie"
            name="serie"
            value={value.serie}
            onChange={handleInputChange}
          />
          <input
            className="form__input"
            type="text"
            placeholder="Ingrese la modelo"
            name="modelo"
            value={value.modelo}
            onChange={handleInputChange}
          />
          <input
            className="form__input"
            type="text"
            placeholder="Ingrese las observaciones"
            name="observaciones"
            value={value.observaciones}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button className="form__button"> Ingresar</button>
    </form>
  );
};

export default NewOrden;
