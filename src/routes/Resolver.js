import React from 'react';
import { Link } from 'react-router-dom';
import Botao from '../componentes/Menu/Botao';
import Resolucao from '../componentes/Resolucao/Resolucao';
const Resolver = () => {
  return (
    <div>
      <Link to="/">
        <Botao nome="Voltar" />
      </Link>
      <Resolucao />
    </div>
  );
};

export default Resolver;
