import React from 'react';
import style from './Botao.module.css';

const Botao = (props) => {
  return (
    <button
      className="btn btn-outline-success
       col-7 Butao "
    >
      {props.nome}
    </button>
  );
};
export default Botao;
