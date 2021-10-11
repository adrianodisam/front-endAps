import React from 'react';
import { Link } from 'react-router-dom';
import Botao from '../componentes/Menu/Botao';
import Painel from '../componentes/Menu/Painel';

const Home = () => {
  return (
    <div>
      <Painel valor="ooo" nome="Resolvidos" />
      <Painel valor="ooo" nome="Denúncias" />
      <Link to="/Denuncia">
        <Botao nome="Denunciar" />
      </Link>
      <Link to="/Resolver">
        <Botao nome="Resolver" />
      </Link>
    </div>
  );
};

export default Home;
