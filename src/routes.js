import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app';
import Landing from 'containers/landing';
import NotFound from 'containers/notfound';
import Start from 'containers/start';
import KeyMetrics from 'containers/metrics';
import Data from 'containers/data';

export default (
  <Route component={App} name='app' path='/'>
    <IndexRoute component={Landing} />
    <Route component={Start} name='Start' path='geospatial' />
    <Route component={Data} name='Start' path='data' />
    <Route component={KeyMetrics} name='KeyMetrics' path='keymetrics' />
    <Route component={NotFound} name='404' path='*' />
  </Route>
);
