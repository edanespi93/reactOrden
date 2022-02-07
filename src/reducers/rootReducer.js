import { combineReducers } from "redux";
import { articuloReducer } from "./articuloReducer";
import { authReducer } from "./authReducer";
import { clienteReducer } from "./clienteReducer";
import { pendientesReducer } from "./pendientesReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  cliente: clienteReducer,
  ui: uiReducer,
  articulo: articuloReducer,
  pendiente: pendientesReducer,
});
