import React from "react";
import styles from "./Main.module.css";

export function Main({ children }) {
  return (
    <main className={styles.main}>
      <section className={styles.articles}>{children}</section>
    </main>
  );
}
