import React from 'react'
import { Route, IndexRoute, Switch, BrowserRouter } from 'react-router'

import LayoutPage from './pages/LayoutPage.js';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';
import NotFoundPage from './pages/NotFoundPage.js';

const routes = (
  <BrowserRouter>
    <Route path="/" component={LayoutPage}>
      <Switch>
        <IndexRoute component={HomePage} />
        <Route path="about" name="about" component={AboutPage} />
        <Route path="contact" name="contact" component={ContactPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Route>
  </BrowserRouter>
);

export default routes;