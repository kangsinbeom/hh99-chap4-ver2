import reactDom from "react-dom";

const ModalPortal = ({ Children }) => {
  const element = document.getElementById("modal");
  return reactDom.createPortal(Children, element);
};

export default ModalPortal;
