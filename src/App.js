import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import {history} from './history'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));


const Login = React.lazy(() => import('./Authentication/Login/Login'));
const Register = React.lazy(() => import('./Authentication/Register/Register'));

class App extends Component {

  render() {
    return (
      <Router history={history}>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </Router>
    );
  }
}

export default App;
