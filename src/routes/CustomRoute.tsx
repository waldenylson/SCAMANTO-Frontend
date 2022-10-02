import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/authentication.hook';

interface IRouteProps extends RouteProps {
  authenticatedRoute?: boolean;
  component: React.ComponentType;
}

const CustomRoute: React.FC<IRouteProps> = ({
  authenticatedRoute = false,
  component: Component,
  ...otherProps
}) => {
  // TODO: colocar o retorno do usuario no hook authentication
  const { last_session } = useAuth();

  return (
    <Route
      {...otherProps}
      children={({ location }) =>
        authenticatedRoute === !!last_session ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: authenticatedRoute ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default CustomRoute;
