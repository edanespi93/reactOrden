import { TYPES } from "../type/TYPES";
const init = {
  articulos: [],
};

export const articuloReducer = (state = init, action) => {
  switch (action.type) {
    case TYPES.articuloGet: {
      return {
        ...state,
        articulos: [...action.payload],
      };
    }

    case TYPES.articuloEntregar: {
      return {
        ...state,
        articulos: state.articulos.map((articulo) =>
          articulo._id === action.payload._id ? action.payload : articulo
        ),
      };
    }

    case TYPES.articuloClear:
      return {
        ...state,
        articulos: [],
      };
    default:
      return state;
  }
};
