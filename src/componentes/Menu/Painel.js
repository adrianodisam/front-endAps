import React from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import styles from './Painel.module.css';

export const Painel = (props) => {
  const { dados, setDados } = React.useContext(GlobalContext);
  const [index, setIndex] = React.useState(0);
  console.log(index);
  React.useEffect(() => {
    if (dados != null) {
      setIndex(dados.length);
    }
  }, [dados]);
  return (
    <div className={styles.Painel}>
      <h1 className={styles.Texto}>{index}</h1>
      <h4>{props.nome}</h4>
    </div>
  );
};
export default Painel;
