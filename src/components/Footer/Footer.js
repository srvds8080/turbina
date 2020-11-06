import React from "react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>© Маршак, 2020.</div>
      <div className={styles.author}>
        Сделано студентами{" "}
        <a href="/" className={styles.authorLink}>
          Яндекс.Практикум
        </a>
      </div>
    </div>
  );
}
