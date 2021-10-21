import React from 'react';
import { ListaItem } from '../ListaItem/ListaItem';

import Style from './Resolucao.module.css';

const Resolucao = () => {
  const [resolve, setResolve] = React.useState(null);
  React.useEffect(() => {
    async function getall() {
      fetch('http://localhost:8080/api/denuncias')
        .then((resolve) => resolve.json())
        .then((json) => setResolve(json));
    }
    getall();
  }, []);

  if (resolve === null) return null;

  return (
    <div className={Style.Resolucao}>
      {resolve.map(({ Nome, Email, id, Cidade, Rua, Problema, Descricao }) => (
        <ListaItem
          nome={Nome}
          email={Email}
          cidade={Cidade}
          rua={Rua}
          problema={Problema}
          descricao={Descricao}
          key={id}
        />
      ))}
    </div>
  );
};

export default Resolucao;
