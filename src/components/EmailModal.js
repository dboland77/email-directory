import React from "react";
import styles from "./EmailAddress.module.css";

const EmailModal = (props) => {
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }
  return (
    <div className={styles.modal} onClick={closeModal} style={divStyle}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default EmailModal;
