import React from 'react';
import { Link } from 'react-router-dom';
import { Editar } from '../componentes/editar/Editar';

const EditarDenuncia = () => {
  return (
    <div>
      <Link to="/Editar">
        <Editar />
      </Link>
    </div>
  );
};

export default EditarDenuncia;
