import React from 'react';
import { Redirect } from 'react-router';
import imagen from '../svg/pessoas.jfif';
import styles from './ResolverDenuncia.module.css';
const ResolverDenuncia = () => {
  const [agradecimento, setAgradecimento] = React.useState(false);
  setTimeout(() => {
    setAgradecimento(!agradecimento);
  }, 5000);
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        " Obrigada por ajudar a dimunuir <br /> nossos problemas Ambientais"
      </h1>
      <img src={imagen} alt="pessoas" className={styles.img} />

      {agradecimento === true && <Redirect to="/" />}
    </div>
  );
};

export default ResolverDenuncia;
