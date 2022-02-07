import { TYPES } from "../type/TYPES";

const initState = {
  openModal: false,
};

export const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.uiModalOpen:
      return {
        ...state,
        openModal: true,
      };
    case TYPES.uiModalClose:
      return {
        ...state,
        openModal: false,
      };

    default:
      return state;
  }
};
