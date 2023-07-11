import { useEffect } from "react";
import reactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  const element = document.getElementById("modal");
  // console.log(document);
  useEffect(() => {
    console.log(element);
  });

  return reactDOM.createPortal(children, element);
};

export default ModalPortal;
