import React from "react";
import styles from "./Image.module.css";

const Image = (props) => {
  return (<img 
  src={props.file} 
  className={styles.logo} 
  alt="Kortical logo" />);
};

export default Image;
