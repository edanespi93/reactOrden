import { TYPES } from "../type/TYPES";

export const clienteReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.clienteSearch:
      return {
        ...action.payload,
      };
    case TYPES.clienteClear:
      return {
        cliente: {},
      };
    case TYPES.clienteUpdate:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
