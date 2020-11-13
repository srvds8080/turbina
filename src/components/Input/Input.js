import styles from "../Input/Input.module.css";
import React from "react";

export default function Input({
                                type, name, placeholder, maxLength, minLength, onChange,
                                checked, required, autoComplete,
                                value, typeError, labelId, children
                              }) {
  return (
      <label
        className={`${styles.label} ${type === "checkbox" && styles.labelCheckbox}`}>
        <input
          className={`${styles.input} ${type === "checkbox" && styles.checkBox}`}
          type={type}
          name={name}
          maxLength={maxLength}
          minLength={minLength}
          onChange={onChange}
          value={value}
          checked={checked}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}/>
        {children}
        {typeError && <span
          className={styles.formError}>
          {typeError}
        </span>}

      </label>
  )
}
