import styles from "./EmailContainer.module.css";

const EmailContainer = (props) => {
  return <div className={styles.flexContainer}>{props.children}</div>;
};

export default EmailContainer;
