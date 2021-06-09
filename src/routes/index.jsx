import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Celulares from '../pages/Celulares'
import Notebooks from '../pages/Noteeboks'
import Computadores from '../pages/Computadores'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/computadores" exact component={Computadores} />
    <Route path="/notebooks" exact component={Notebooks} />
    <Route path="/celulares" exact component={Celulares} />
  </Switch>
);

export default Routes;
