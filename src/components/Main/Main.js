import React from "react";
import styles from "./Main.module.css";

/*Блок Main ему пропсом children передаем контент:
 * статьи, форму и т.д.*/
export function Main({ children }) {
  return (
    <main className={styles.main}>
      <section className={styles.articles}>{children}</section>
    </main>
  );
}
/*
<section className={styles.articles} id='1'>
  <div className={styles.article}>
    <h2 className={styles.title}>GGGHG</h2>
    <div className={styles.grid}>
      <p className={styles.content}>• Дети никогда не прекращают творить и круто
        стараться быть на них похожими в этом.</p>
    </div>

  </div>
</section>*/
