import { fetchHelp } from "./../helpers/fetch";
import { TYPES } from "./../type/TYPES";
import { Swal } from "sweetalert2";

export const startGetArticulos = (cedula) => {
  return async (dispatch) => {
    try {
      const res = await fetchHelp("articulo/searchOrden", cedula, "POST");
      const data = await res.json();
      if (data.ok) {
        dispatch(getArticulo(data.articulo));
      }
    } catch (error) {
      Swal.fire("Error", error, "error");
    }
  };
};

export const startEntregarArticulo = (articulo) => {
  return async (dispatch) => {
    const res = await fetchHelp("articulo/search", articulo, "PUT");
    const data = await res.json();

    if (data.ok) {
      dispatch(entregarArticulo(data.articulo));
    }
  };
};
const entregarArticulo = (data) => {
  return {
    type: TYPES.articuloEntregar,
    payload: data,
  };
};

export const getArticulo = (articulos) => {
  return {
    type: TYPES.articuloGet,
    payload: articulos,
  };
};

export const clearArticulo = () => {
  return {
    type: TYPES.articuloClear,
  };
};
