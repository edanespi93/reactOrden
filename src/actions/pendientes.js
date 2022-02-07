import { fetchHelp } from "./../helpers/fetch";
import { TYPES } from "./../type/TYPES";
import { Swal } from "sweetalert2";

export const startloadPendientes = () => {
  return async (dispatch) => {
    const res = await fetchHelp("articulo/pendientes", {});
    const data = await res.json();
    if (data.ok) {
      dispatch(pendientes(data.articulo));
    } else {
      Swal.fire("Error", "Ocurrio un error", "error");
    }
  };
};

const pendientes = (articulo) => {
  return {
    type: TYPES.loadPendientes,
    payload: articulo,
  };
};
