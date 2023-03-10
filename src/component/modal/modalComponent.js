import React from "react";
import { ModalDiv } from "./styles/modal.styles";

const ModalComponent = ({ children, styleModel, open }) => {
  return (
    <ModalDiv open={open}>
      <div className="modalContainer">
        <div style={{ ...styleModel }} className={"modalContent"}>
          {children}
        </div>
      </div>
    </ModalDiv>
  );
};

export default ModalComponent;
