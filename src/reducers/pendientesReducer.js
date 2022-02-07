import { TYPES } from "../type/TYPES";
const init = {
  pendientes: [],
};

export const pendientesReducer = (state = init, action) => {
  switch (action.type) {
    case TYPES.loadPendientes: {
      return {
        ...state,
        pendientes: [...action.payload],
      };
    }

    default:
      return state;
  }
};
