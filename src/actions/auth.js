import Swal from "sweetalert2";
import { fetchHelp } from "../helpers/fetch";
import { TYPES } from "../type/TYPES";

export const startLogin = (value) => {
  return async (dispatch) => {
    const res = await fetchHelp("auth/login", value, "POST");
    const data = await res.json();

    if (data.ok) {
      let { username, _id } = data.user;
      localStorage.setItem("username", value.username);
      localStorage.setItem("password", value.password);
      return dispatch(login({ username, uid: _id }));
    } else if (!data.ok) {
      return Swal.fire("Error", data.msg, "error");
    }
  };
};

const login = (data) => {
  return {
    type: TYPES.authLogin,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: TYPES.authLogout,
  };
};
