// src/components/Modal.js
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Key Features</h2>
        <p>Describe the key features of your project here...</p>
      </div>
    </div>
  );
};

export default Modal;
