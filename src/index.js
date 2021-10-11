import React from 'react';
import ReactDOM from 'react-dom';
import Container from './componentes/contanier/Container';
import Header from './componentes/Menu/Header';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Container />
  </React.StrictMode>,
  document.getElementById('root'),
);
