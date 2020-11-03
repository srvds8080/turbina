import React from "react";
import styles from "./Main.module.css";

/*Блок Main ему пропсом children передаем контент:
* статьи, форму и т.д.*/
export function Main({children}) {
  return (
    <main className={styles.main}>
      <section className={styles.articles}>
        {children}
      </section>
    </main>
  )
}
