import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageNotFound from './routes/PageNotFound';
import Home from './routes/Home';

const routes = [
  {path: '/', component: Home},
];

/**
 * A helper to generate a list of the main routes within the application. 
 * Could potentially be useful to generate a sitemap or footer content.
 * @returns {string[]} the available routes 
 */
export const getValidRoutes = () => routes.map(o => o.path);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((o, idx) => (
          <Route exact path={o.path} component={o.component} key={idx} />
        ))}
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
