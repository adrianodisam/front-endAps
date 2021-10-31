import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../componentes/Cards/Card';
import Botao from '../componentes/Menu/Botao';

const Nenhuma = () => {
  return (
    <div>
      <Link to="/">
        <Botao nome="Voltar" />
      </Link>
      <h1>Página não Encontrada</h1>
      <Card />
    </div>
  );
};

export default Nenhuma;
