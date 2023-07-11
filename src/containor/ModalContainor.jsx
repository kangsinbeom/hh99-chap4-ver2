import React, { useEffect, useState } from "react";
import Modal from "../components/modal/Modal";
import ModalPortal from "../components/modal/ModalPortal";
import { useSelector } from "react-redux";
const ModalContainor = () => {
  const modalChecked = useSelector((state) => state.modal);

  return <ModalPortal>{modalChecked && <Modal />}</ModalPortal>;
};

export default ModalContainor;
