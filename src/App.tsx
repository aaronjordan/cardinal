import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AuthContextWrapper } from './modules/Authentication/Context/AuthContext';
import Firebase from './modules/Firebase/Firebase';
import PageNotFound from './routes/PageNotFound';
import Home from './routes/Home';
import ViewNote from './routes/ViewNote';
import LoginPage from './routes/Login';
import Header from './modules/Header/Header';
import RegisterPage from './routes/Register';

interface Route {
  path: string;
  component: React.FunctionComponent;
};

const routes: Route[] = [
  {path: '/', component: Home},
  {path: '/view/:noteId/', component: ViewNote},
  {path: '/login', component: LoginPage},
  {path: '/register', component: RegisterPage},
];

/**
 * A helper to generate a list of the main routes within the application. 
 * Could potentially be useful to generate a sitemap or footer content.
 * @returns the available routes 
 */
export const getValidRoutes = () : string[] => routes.map(o => o.path);

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextWrapper>
        <Firebase />
        <Header />
        <Switch>
          {routes.map((o, idx) => (
            <Route exact path={o.path} component={o.component} key={idx} />
          ))}
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </AuthContextWrapper>
    </BrowserRouter>
  );
};

export default App;
