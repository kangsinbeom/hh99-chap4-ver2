import React from "react";
import { StyledModal } from "./modalStyle";
import ModalPortal from "./ModalPortal";
const Modal = () => {
  console.log("모달이 연결은 되니껴?");
  return (
    <ModalPortal>
      <StyledModal>asdfasdf</StyledModal>
    </ModalPortal>
  );
};

export default Modal;
