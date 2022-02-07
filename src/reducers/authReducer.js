import { TYPES } from "../type/TYPES";
const intialState = {
  username: null,
  uid: null,
};

export const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case TYPES.authLogin:
      return {
        ...state,
        ...action.payload,
      };
    case TYPES.authLogout:
      return {
        ...intialState,
      };

    default:
      return state;
  }
};
