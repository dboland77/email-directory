import React from "react";
import EmailAddress from "../Email/EmailAddress";
import styles from "./EmailContainer.module.css";

const EmailContainer = () => {
  const addresses = ["john@gmail.com", "pat@pat.com", "jim@gem.ie","john@gmail.com", "john@gmail.com", "pat@pat.com", "jim@gem.ie","pat@pat.com", "jim@gem.ie"];

  const listItems = addresses.map((address, index) => (
    <EmailAddress key={index} value={address} />
  ));

  return (
    <div className={styles.flexContainer}>
      <ul>{listItems}</ul>
    </div>
  );
};

export default EmailContainer;
