import { TYPES } from "../type/TYPES";

export const startOpenModal = () => {
  return {
    type: TYPES.uiModalOpen,
  };
};

export const startCloseModal = () => {
  return {
    type: TYPES.uiModalClose,
  };
};
