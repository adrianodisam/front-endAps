import React from 'react';
import ReactDOM from 'react-dom';
import Container from './componentes/contanier/Container';
import { Footer } from './componentes/Menu/Footer';

import './index.css';
ReactDOM.render(
  <React.StrictMode>
    <Container />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root'),
);
