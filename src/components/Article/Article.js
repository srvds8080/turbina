import styles from "./Article.module.css";

/*contentArray это массив текстовых элементов
*которые портируются в разметку параграфами*/
export function Article({title, contentArray}) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {
          contentArray.map((paragraph) => <p className={styles.content}>{paragraph}</p>)
        }
      </div>

    </>
  )
}
