import React from 'react';
import { Router } from 'react-router-dom';
import './scss/style.scss';
import {history} from './history'
import Routes from './Rout';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


const App = ()=>{
  return (
    <Router history={history}>
        <React.Suspense fallback={loading}>
          <Routes />
        </React.Suspense>
    </Router>
  );
}

export default App;
