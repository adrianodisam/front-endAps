import React from 'react';
import { Link } from 'react-router-dom';
import Botao from '../componentes/Menu/Botao';
import Modal from '../componentes/modal/Modal';

const Denuncia = () => {
  return (
    <div>
      <Link to="/">
        <Botao nome="Voltar" />
      </Link>
      <Modal />
    </div>
  );
};

export default Denuncia;
