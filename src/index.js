import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import "./static/style.css";
import "./static/calendar.css";
import "./static/react-big-calendar.css";

render(
    <App/>, 
    document.getElementById('app')
);