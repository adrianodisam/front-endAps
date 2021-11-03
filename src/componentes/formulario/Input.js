import React from 'react';
import styles from './Input.module.css';

export const Input = ({ label, type, name, value, onChange }) => {
  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.Input}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};
