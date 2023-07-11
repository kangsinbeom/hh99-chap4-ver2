import React from "react";
import { StyledModal } from "./modalStyle";
import ModalPortal from "./ModalPortal";
const Modal = () => {
  return (
    <ModalPortal>
      <StyledModal></StyledModal>
    </ModalPortal>
  );
};

export default Modal;
