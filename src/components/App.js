import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
        <Header />
        <Main />
    </div>
  </Router>
)

export default App
