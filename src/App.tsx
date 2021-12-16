import AdminLogin from './page/adminLogin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './page/login';
import { ProtectedRoute } from './utils/protectedRoute';
import { useEffect } from 'react';
import useStore from './store/globalState';
import { getCredential } from './sessions/session';
import BerandaAdmin from './page/admin/beranda';
import Indicators from './page/admin/indicators';
import Admins from './page/admin/admins';
import Questions from './page/admin/questions';
import QuestionsTypes from './page/admin/questionsType';
import Students from './page/admin/students';
import Subjects from './page/admin/subject';
import Diagnostik from './page/admin/diagnostik';

function App() {
  const ProtectedRouteData = [
    {
      id: 1,
      path: '/loginSiswa',
      component: Login,
      role: '',
    },
    {
      id: 2,
      path: '/loginAdmin',
      component: AdminLogin,
      role: '',
    },
    {
      id: 3,
      path: '/admin',
      component: BerandaAdmin,
      role: 'admin',
    },
  ];
  const globalData = useStore((state) => state);

  useEffect(() => {
    if (
      globalData.username === '' &&
      globalData.token === '' &&
      globalData.role === ''
    ) {
      const getData = getCredential();
      if (
        getData.role !== '' &&
        getData.token !== '' &&
        getData.username !== ''
      ) {
        globalData.setRole(getData.role);
        globalData.setToken(getData.token);
        globalData.setUsername(getData.username);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path='/login/siswa'>
          <Login />
        </Route>
        <Route exact path='/login/admin'>
          <AdminLogin />
        </Route>
        <Route exact path='/adminnn'>
          <BerandaAdmin />
        </Route>
        <Route exact path='/indicators'>
          <Indicators />
        </Route>
        <Route exact path='/admins'>
          <Admins />
        </Route>
        <Route exact path='/questions'>
          <Questions />
        </Route>
        <Route exact path='/questionsType'>
          <QuestionsTypes />
        </Route>
        <Route exact path='/studentss'>
          <Students />
        </Route>
        <Route exact path='/diagnostik'>
          <Diagnostik />
        </Route>
        <Route exact path='/subjects'>
          <Subjects />
        </Route>
        {ProtectedRouteData.map((data) => {
          return (
            <ProtectedRoute
              component={data.component}
              path={data.path}
              role={data.role}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
