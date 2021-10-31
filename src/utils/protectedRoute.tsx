import React, { Component, FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
interface Props {
  component: () => JSX.Element;
  path: string;
}
export const ProtectedRoute: FC<Props> = ({ component, path }) => {
  const login = true;
  return (
    <Route
      exact
      path={path}
      render={(props) => {
        if (login !== true) {
          console.log(props);
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
