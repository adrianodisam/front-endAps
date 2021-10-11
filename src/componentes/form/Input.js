import React from 'react';
import Style from './Input.module.css';
const Input = (props) => {
  const [nome, setNome] = React.useState('');
  return (
    <form action="" className={Style.form}>
      <label className={Style.label} htmlFor="">
        {props.label}
      </label>
      <div className={Style.divInput}>
        <input
          className={Style.input}
          type="text"
          id={props.id}
          placeholder={props.placeholder}
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>
    </form>
  );
};

export default Input;
