import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import RouteWithLayout from './RouteWithLayout/RouteWithLayout';

const MainLayout = React.lazy(() => import('./layouts/Main'));
const MinimalLayout = React.lazy(() => import('./layouts/Minimal'));
const Login = React.lazy(() => import('./Admin/Authentication/Login/Login'));
const Register = React.lazy(() => import('./Admin/Authentication/Register/Register'));
const NotFoundView = React.lazy(() => import('./views/pages/page404/Page404'));

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      {routes.map((route, idx) => {
        return(
        <RouteWithLayout
          key={idx}
          path={route.path}
          exact={route.exact}
          component={route.component}
          layout={MainLayout}
        />)
      })}
      <RouteWithLayout
        component={Login}
        exact
        layout={MinimalLayout}
        path="/login"
      />
      <RouteWithLayout
        component={Register}
        exact
        layout={MinimalLayout}
        path="/register"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
