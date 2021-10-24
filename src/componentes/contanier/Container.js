import React from 'react';
import styles from './Container.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../routes/Home';
import Denuncia from '../../routes/Denuncia';
import Resolver from '../../routes/Resolver';
import Nenhuma from '../../routes/Nenhuma';
import EditarDenuncia from '../../routes/EditarDenuncia';

const Container = () => {
  return (
    <Router>
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
          <Route exact path="/resolver">
            <Resolver />
          </Route>
          <Route exact path="*">
            <Nenhuma />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Container;
