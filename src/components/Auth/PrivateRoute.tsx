import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import useCurrentUser from '../../contexts/CurrentUser';

export default function PrivateRoute({ component, ...rest }: RouteProps) {
  const Component = component!;

  const user = useCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) => (user ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      ))}
    />
  );
}
