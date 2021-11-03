import React from 'react';
import styles from './Container.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../routes/Home';
import Denuncia from '../../routes/Denuncia';
import Resolver from '../../routes/Resolver';
import Nenhuma from '../../routes/Nenhuma';
import EditarDenuncia from '../../routes/EditarDenuncia';
import Resolvido from '../../routes/Resolvido';
import { GlobalStorage } from '../GlobalContext/GlobalContext';
import Header from '../Menu/Header';

const Container = () => {
  return (
    <GlobalStorage>
      <Router>
        {' '}
        <Header />
        <div className={styles.container}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/Editar">
              <EditarDenuncia />
            </Route>
            <Route exact path="/denuncia">
              <Denuncia />
            </Route>

            <Route exact path="/Agradecimento" component={Resolvido} />
            <Route exact path="/resolver">
              <Resolver />
            </Route>
            <Route exact path="*">
              <Nenhuma />
            </Route>
          </Switch>
        </div>
      </Router>
    </GlobalStorage>
  );
};

export default Container;
