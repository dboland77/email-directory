import React from "react";
import EmailAddress from "../Email/EmailAddress";
import styles from "./EmailContainer.module.css";

const EmailContainer = (props) => {
  
  const listItems = props.addresses.map((a, i) => (
    <EmailAddress key={i} value={a} />
  ));



  return (
    <div className={styles.flexContainer}>
      <ul>{props.addresses}</ul>
    </div>
  );
};

export default EmailContainer;
