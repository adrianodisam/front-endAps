import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../componentes/formulario/Form';
import Botao from '../componentes/Menu/Botao';

const Denuncia = () => {
  return (
    <div>
      <Link to="/">
        <Botao nome="Voltar" />
      </Link>
      <Form />
    </div>
  );
};

export default Denuncia;
