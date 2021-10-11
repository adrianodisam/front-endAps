import React from 'react';
import styles from './Painel.module.css';

export const Painel = (props) => {
  return (
    <div className={styles.Painel}>
      <h1 className={styles.Texto}>{props.valor}</h1>
      <h4>{props.nome}</h4>
    </div>
  );
};
export default Painel;
