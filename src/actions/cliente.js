import Swal from "sweetalert2";
import { TYPES } from "../type/TYPES";
import { fetchHelp } from "./../helpers/fetch";
import { startCloseModal } from "./ui";

export const startSearchCliente = (cedula) => {
  return async (dispatch) => {
    try {
      const resp = await fetchHelp("cliente/searchCedula", cedula, "POST");
      const data = await resp.json();
      if (!data.ok) {
        return Swal.fire("Error", data.msg, "error");
      }
      dispatch(searchCliente(data.user));
    } catch (error) {
      Swal.fire("Error", error, "error");
    }
  };
};

const searchCliente = (cliente) => {
  return {
    type: TYPES.clienteSearch,
    payload: cliente,
  };
};

export const startUpdateCliente = (cliente) => {
  return async (dispatch) => {
    try {
      const res = await fetchHelp("cliente/edit", cliente, "PUT");
      const data = await res.json();

      if (data.ok) {
        Swal.fire("Ok", "Se actualizo correctamente el cliente", "success");
        dispatch(startCloseModal());
        dispatch(updateCliente(data.cliente));
      }
    } catch (error) {
      Swal.fire("Error", "Ocurrio un error", "error");
    }
  };
};

export const updateCliente = (cliente) => {
  return {
    type: TYPES.clienteUpdate,
    payload: cliente,
  };
};

export const clearSearch = () => {
  return {
    type: TYPES.clienteClear,
  };
};
