import React from 'react';
import styles from './TextArea.module.css';

export const TextArea = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        className={styles.TextArea}
        name={name}
        value={value}
        id={name}
        cols="18"
        rows="4"
        onChange={onChange}
        required
      ></textarea>
    </div>
  );
};
