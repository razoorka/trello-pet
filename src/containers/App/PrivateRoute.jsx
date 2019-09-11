import React from 'react';
import { Route, Redirect,  } from 'react-router-dom';


import { LOGIN_REDIRECT_LINK } from './constants';

/* eslint-disable */
const PrivateRoute = ({ component: Component, authentificated, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (authentificated) {
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: LOGIN_REDIRECT_LINK,
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);
/* eslint-enable */

export default PrivateRoute
