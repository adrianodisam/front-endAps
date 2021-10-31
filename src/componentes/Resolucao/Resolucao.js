import React from 'react';
import Style from './Resolucao.module.css';
import Card from '../Cards/Card';

const Resolucao = () => {
  const [resolve, setResolve] = React.useState(null);
  React.useEffect(() => {
    fetch('http://localhost:8080/api/denuncias')
      .then((resolve) => resolve.json())
      .then((json) => setResolve(json));
  }, []);

  if (resolve === null) return <h2>Vazio</h2>;
  return (
    <div className={Style.Resolucao}>
      <Card />
    </div>
  );
};

export default Resolucao;
