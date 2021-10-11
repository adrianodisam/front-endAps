import React from 'react';
import Style from './Select.module.css';
const Select = () => {
  const [select, setSelect] = React.useState('select');
  return (
    <div>
      {' '}
      <label className={Style.label} htmlFor="">
        Problema
      </label>
      <select
        className={Style.select}
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        id="problema"
      >
        <option disable value="">
          Selecione
        </option>
        <option className={Style.option} value="Lixo">
          Lixo
        </option>
        <option className={Style.option} value="Desmatamento">
          Desmatamento
        </option>
        <option className={Style.option} value="Queimadas">
          Queimadas
        </option>
        <option className={Style.option} value="Vazamento">
          Vazamento
        </option>
      </select>
    </div>
  );
};

export default Select;
