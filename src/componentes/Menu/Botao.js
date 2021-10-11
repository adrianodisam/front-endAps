import React from 'react';
import styles from './botao.module.css';

const Botao = (props) => {
  return (
    <div>
      <button className={styles.divBut}>{props.nome}</button>
    </div>
  );
};
export default Botao;
