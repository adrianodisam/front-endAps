import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../componentes/Cards/Card';
import Botao from '../componentes/Menu/Botao';

const Resolver = () => {
  return (
    <div>
      <Link to="/">
        <Botao nome="Voltar" />
      </Link>
      <Card />
    </div>
  );
};

export default Resolver;
