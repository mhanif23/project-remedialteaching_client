import React, { Component, FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import useStore from '../store/globalState';
interface Props {
  component: () => JSX.Element;
  path: string;
  role: string;
}
export const ProtectedRoute: FC<Props> = ({ component, path, role }) => {
  const roleId = useStore((state) => state.role);
  const token = useStore((state) => state.token);
  return (
    <Route
      exact
      path={path}
      render={(props) => {
        if (role === roleId && token !== '') {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login/siswa',
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
