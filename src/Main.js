import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './Search';
import Hero from './Hero';
import Bad from './Bad';

const Main = (props) => {
  return (
    <div className="page-content">
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route exact path="/search" component={ Hero } />
        <Route component={ Bad } />
      </Switch>
    </div>
  )
};

export default Main;