import React from 'react';
import { Link } from 'react-router-dom';
import Botao from '../componentes/Menu/Botao';
import Painel from '../componentes/Menu/Painel';

const Home = () => {
  return (
    <div className="card ">
      <div className="card-header">
        <h5 className="card-title">
          <Painel valor="ooo" nome="Denúncias até momento" />
        </h5>
      </div>

      <Link to="/Denuncia">
        <Botao nome="Reportar" />
      </Link>
      <Link to="/Resolver">
        <Botao nome="Resolver" />
      </Link>
    </div>
  );
};

export default Home;
