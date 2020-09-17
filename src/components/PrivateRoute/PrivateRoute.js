import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../Home/Home';

const PrivateRoute = ({ children, ...rest }) => {
    const [places, handleSelectPlace, detail, user, setUser] = useContext(UserContext)
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.success ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;