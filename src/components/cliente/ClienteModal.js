import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { startCloseModal } from "../../actions/ui";
import del from "../../assets/delete.svg";
import upd from "../../assets/save.svg";
import "./ClienteScreen.css";
import { startUpdateCliente } from "./../../actions/cliente";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function ClienteModal({ handleEraser }) {
  const dispatch = useDispatch();
  const { openModal } = useSelector((state) => state.ui);

  const { _id, nombres, cedula, telefono, direccion, email } = useSelector(
    (state) => state.cliente
  );

  useEffect(() => {
    setForm({ nombres, cedula, telefono, direccion, email });
  }, [_id, nombres, cedula, telefono, direccion, email]);

  const [form, setForm] = useState({
    nombres,
    cedula,
    telefono,
    email,
    direccion,
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const closeModal = () => {
    dispatch(startCloseModal());
  };

  const hanldeUpdate = (e) => {
    e.preventDefault();
    form._id = _id;
    dispatch(startUpdateCliente(form));
  };
  return (
    <div>
      <Modal
        closeTimeoutMS={200}
        isOpen={openModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="modal-fondo"
      >
        <button onClick={closeModal} className="btn_close">
          <img src={del} alt="img" />
        </button>
        <form
          className="modal__edit"
          onSubmit={hanldeUpdate}
          autoComplete="off"
        >
          <h2>Editar el Cliente</h2>
          <label>Escriba el nombre del Cliente</label>
          <input
            type="text"
            className="modal__input"
            placeholder="Nombres"
            name="nombres"
            value={form.nombres}
            onChange={handleInputChange}
          />
          <label> Escriba la cédula</label>
          <input
            type="text"
            className="modal__input"
            placeholder="Cédula"
            name="cedula"
            value={form.cedula}
            onChange={handleInputChange}
          />

          <label>Escriba el telefono</label>
          <input
            type="text"
            className="modal__input"
            placeholder="Telefono"
            name="telefono"
            value={form.telefono}
            onChange={handleInputChange}
          />
          <label> Escriba el email </label>
          <input
            type="text"
            className="modal__input"
            placeholder="Email"
            autoComplete="false"
            name="email"
            value={form.email}
            onChange={handleInputChange}
          />

          <label> Escriba dirección </label>
          <input
            type="text"
            className="modal__input"
            placeholder="Dirección"
            name="direccion"
            autoComplete="false"
            value={form.direccion}
            onChange={handleInputChange}
          />
          <button className="modal__clear" type="submit">
            <img src={upd} alt="img" />
            Actualizar
          </button>
        </form>
      </Modal>
    </div>
  );
}
