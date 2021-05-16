import React from "react";
import Button from "./Button";
const Modal = ({ children, onSubmit, header, buttonLabel }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <h2>{header}</h2>
        {children}
        <Button label={buttonLabel} onClick={onSubmit}/>
      </div>
    </div>
  );
};

export default Modal;
