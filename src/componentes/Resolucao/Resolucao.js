import React from 'react';
import { ListaItem } from '../ListaItem/ListaItem';
import { Link } from 'react-router-dom';

import Style from './Resolucao.module.css';

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
      {resolve.map(
        ({ nome, email, id, cidade, rua, problema, descricao }, index) => (
          <ListaItem
            nome={nome}
            email={email}
            cidade={cidade}
            rua={rua}
            problema={problema}
            descricao={descricao}
            index={index + 1}
            id={id}
            key={id}
          />
        ),
      )}
    </div>
  );
};

export default Resolucao;
