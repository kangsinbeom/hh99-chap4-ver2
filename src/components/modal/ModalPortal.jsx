import reactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  const element = document.getElementById("modal");
  return reactDOM.createPortal(children, element);
};

export default ModalPortal;
