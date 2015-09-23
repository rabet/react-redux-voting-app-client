import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App } from './components/App';
import Voting from './components/Voting';
import { ResultsContainer } from './components/Results';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Voting} />
    <Route path="results"
           component={ResultsContainer} />
  </Route>
);
