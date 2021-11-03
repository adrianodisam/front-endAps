import React from 'react';
import styles from './Select.module.css';

export const Select = ({ onChange, name }) => {
  return (
    <div>
      <label className={styles.label} htmlFor="name">
        {name}
      </label>
      <select
        className={styles.select}
        name="problema"
        id="problema"
        onChange={onChange}
        required
      >
        <option className="option" value="">
          Selecione uma opção
        </option>
        <option value="Lixo">Lixo</option>
        <option value="Água">Água</option>
        <option className="option" value="Queimadas">
          Queimadas
        </option>
      </select>
    </div>
  );
};
