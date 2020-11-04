import React from "react";
import styles from "./Form.module.css"

export function Form() {

  const [isChecked, setCheck] = React.useState(false)

  function toggleCheckBox() {
    setCheck(true)
  }

  return (
    <form action="#" name='#' method="get" className={styles.form} noValidate>
      <>
        <h3 className={styles.title}>Форма</h3>
        <p className={styles.subtitle}>Заполняя эту форму, вы становитесь частью
          проекта.</p>
        <input
          type="text"
          name="form_author"
          className={styles.input}
          placeholder="Имя и фамилия автора"
          minLength="2"
          maxLength="60"
          required
          autoComplete="off"/>
        <span className={styles.formError} id={styles.formError}/>
        <input
          type="email"
          name="form_email"
          className={styles.input}
          placeholder="Почта"
          required
          autoComplete="off"/>
        <span className={styles.formError} id={styles.formError}/>
        <input
          type="number"
          name="form_number"
          className={styles.input}
          placeholder="Телефон"
          required
          autoComplete="off"/>
        <span className={styles.formError} id={styles.formError}/>
        <input
          name="form_text"
          className={styles.input}
          required
          placeholder="Стихи"
          autoComplete="off"/>
        <span className={styles.formError} id={styles.formError}/>
        <input
          type="checkbox"
          name="form_check"
          className={styles.checkBox}
          required
          autoComplete="off"/>
        <label id="form_check" className={styles.label}><p className={styles.labelText}>Согласен с <a href="#" className={styles.labelLink}>офертой</a></p></label>
        <span className={styles.formError} id={styles.formError}/>

      </>
      <button className={styles.button} type="submit">Отправить форму</button>
    </form>
  )
}
