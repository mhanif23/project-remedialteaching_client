import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import AdminLogin from '../page/adminLogin';
import Login from '../page/login';
// import Login from '../page/login';

import useStore from '../store/globalState';
interface Props {
  component: () => JSX.Element;
  path: string;
  role: string;
}
export const ProtectedRoute: FC<Props> = ({
  component,
  path,
  role,
  ...rest
}) => {
  const roleId = useStore((state) => state.role);
  const token = useStore((state) => state.token);
  if (path === '/loginSiswa' && token === '') {
    return <Route exact path='/loginSiswa' component={Login} {...rest} />;
  } else if (path === '/loginAdmin' && token === '') {
    return <Route exact path='/loginAdmin' component={AdminLogin} {...rest} />;
  } else if (roleId === role && token !== '') {
    return <Route exact path={path} component={component} {...rest} />;
  } else if (roleId === 'student' && token !== '') {
    return (
      <Route
        exact
        path='/diagnostik_student'
        component={AdminLogin}
        {...rest}
      />
    );
  } else if (roleId === 'admin' && token !== '') {
    return <Route exact path='/diagnostik' component={AdminLogin} {...rest} />;
  } else {
    return <Route exact path='/' component={Login} {...rest} />;
  }
};
