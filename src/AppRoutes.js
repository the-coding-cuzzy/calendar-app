import React,{Component} from 'react';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes.js';

export default class AppRoutes extends Component {
  render() {
    return (
      <Router routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
}
