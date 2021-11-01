import React from 'react';
import styles from './botao.module.css';

const Botao = (props) => {
  return (
    <div className={styles.divBut}>
      <button
        className="btn btn-lightbg-success
        text-dark col-7"
      >
        {props.nome}
      </button>
    </div>
  );
};
export default Botao;
