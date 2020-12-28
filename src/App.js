import React, { Component, Fragment } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './scss/style.scss';
import {history} from './history'
import Page404 from './views/pages/page404/Page404';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));


const Login = React.lazy(() => import('./Admin/Authentication/Login/Login'));
const Register = React.lazy(() => import('./Admin/Authentication/Register/Register'));

const App = ()=>{
  const data = JSON.parse(localStorage.getItem("user"))
  const isUserAuthorized = data && data.token !== null ?true:false
  console.log(isUserAuthorized, data)
  return (
    <Router history={history}>
        <React.Suspense fallback={loading}>
          <Switch>
            {/* {!isUserAuthorized&& */}
            {/* <Fragment> */}
            
            
            {isUserAuthorized?<Route path="/" name="Home" render={props => <TheLayout {...props}/>} />:
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />}
            <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
            <Redirect to="/dashboard" />
          </Switch>
        </React.Suspense>
    </Router>
  );
}

export default App;
