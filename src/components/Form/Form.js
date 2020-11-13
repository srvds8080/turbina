import React, {useState, useCallback} from "react";
import styles from "./Form.module.css";
import Input from "../Input/Input"

export function Form({title, subTitle, textButton}) {
  const [isChecked, setCheck] = useState(false);
  const toggleCheckBox = useCallback(() => {
    setCheck(!isChecked);
  }, [isChecked]);

//validation
  const [values, setValues] = useState({
    formAuthor: "",
    formEmail: "",
    formNumber: "",
    formText: "",
    formCheckbox: false,
  });
  const [errors, setErrors] = useState({});

  const handleValidate = useCallback((element) => {
    setErrors((prevState) => ({
      ...prevState,
      [element.name]: element.validity.valid ? "" : element.validationMessage
    }));
  }, []);

  const handleOnChange = useCallback(
    (e) => {
      setValues((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.name === "formCheckbox" ?
          !prevState.formCheckbox && toggleCheckBox() : e.target.value
      }));
      const element = e.target;

      handleValidate(element);
    }, [handleValidate, toggleCheckBox]
  );
  const handleOnSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (e.target.checkValidity()) {
        console.log("submit");
      } else {
        const {elements} = e.target;
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          element.name && handleValidate(element)
        }
        console.log("has err")
      }
    }, [handleValidate]
  )


  return (
    <form className={styles.form} noValidate onSubmit={handleOnSubmit}>
      <>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>
          {subTitle}
        </p>
        <div className={styles.inputsGrid}>
          <Input
            type="text"
            name="formAuthor"
            onChange={handleOnChange}
            placeholder="Имя и фамилия автора"
            minLength="2"
            maxLength="60"
            required
            autoComplete="off"
            value={values.formAuthor}
            typeError={errors.formAuthor}
          />
          <Input
            type="email"
            name="formEmail"
            onChange={handleOnChange}
            value={values.formEmail}
            placeholder="Почта"
            required
            autoComplete="off"
            typeError={errors.formEmail}
          />
          <Input
            type="tel"
            name="formNumber"
            onChange={handleOnChange}
            placeholder="Телефон"
            minLength="3"
            maxLength="10"
            required
            autoComplete="off"
            typeError={errors.formNumber}
          />
          <Input
            name="formText"
            required
            onChange={handleOnChange}
            placeholder="Стихи"
            autoComplete="off"
            typeError={errors.formText}
          />
        </div>

        <Input
          type="checkbox"
          name="formCheckbox"
          labelId="formCheckbox"
          checked={values.formCheckbox}
          onChange={(e) => {
            handleOnChange(e);
          }}
          required
          autoComplete="off"
          typeError={errors.formCheckbox}>
          {<p className={styles.labelText}>
              <span className={`${styles.checkCircle}
              ${isChecked && styles.checkCircleActive}`}/>
            {!isChecked && <span>Согласен с&#8194;</span>}
            {!isChecked && <a href="/" className={styles.labelLink}>офертой</a>}
          </p>}
        </Input>
      </>
      <button className={styles.button} type="submit">
        {textButton}
      </button>
    </form>
  );
}
