//general
import React from "react";
//styles
import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
};

export default Loader;
