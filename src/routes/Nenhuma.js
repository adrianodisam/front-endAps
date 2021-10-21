import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../componentes/form/Input';

import Botao from '../componentes/Menu/Botao';

const Nenhuma = () => {
  return (
    <div>
      <Link to="/">
        <Botao nome="Voltar" />
      </Link>
      <h1>Página não Encontrada</h1>
      <Input />
    </div>
  );
};

export default Nenhuma;
