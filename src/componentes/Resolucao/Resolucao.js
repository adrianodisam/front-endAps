import React from 'react';
import { ListaItem } from '../ListaItem/ListaItem';

import Style from './Resolucao.module.css';

const Resolucao = () => {
  const [resolve, setResolve] = React.useState(null);
  React.useEffect(() => {
    fetch('http://localhost:8080/api/denuncias')
      .then((resolve) => resolve.json())
      .then((json) => setResolve(json));
  }, []);
  console.log(resolve);
  if (resolve === null) return null;
  let array = ['1,', '2', '3'];
  array.map(function (value, index) {});
  return (
    <div className={Style.Resolucao}>
      {resolve.map(
        ({ Nome, Email, id, Cidade, Rua, Problema, Descricao }, index) => (
          <ListaItem
            nome={Nome}
            email={Email}
            cidade={Cidade}
            rua={Rua}
            problema={Problema}
            descricao={Descricao}
            index={index + 1}
            id={id}
          />
        ),
      )}
    </div>
  );
};

export default Resolucao;
