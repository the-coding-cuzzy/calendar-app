import React from 'react'
import { Switch, Route } from 'react-router-dom'
import VisibleCounter from '../pages/CounterPage.js'
import NamePage from '../pages/NamePage.js';
import ContactForm from '../pages/ContactForm';
import CalendarPage from '../pages/CalendarPage.js';
import NotFoundPage from '../pages/NotFoundPage.js';
import HelloPage from '../pages/HelloPage.js';

import {Provider} from 'react-redux';

import configureStore from '../store.js'
const store = configureStore();

const Main = () => (
  <Provider store={store}>
    <main className="content">
      <Switch>
        <Route exact path='/' component={CalendarPage}/>
        <Route path='/name' component={NamePage}/>
        <Route path='/hello' component={HelloPage}/>
        <Route path='/counter' component={VisibleCounter}/>
        <Route path='/calendar' component={CalendarPage}/>
        <Route path='/form' component={ContactForm}/>
        <Route path='/*' component={NotFoundPage}/>
      </Switch>
    </main>
  </Provider>
)

export default Main
