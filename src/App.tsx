import AdminLogin from './page/adminLogin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './page/login';
import { ProtectedRoute } from './utils/protectedRoute';

function App() {
  const ProtectedRouteData = [
    {
      id: 1,
      path: '/loginSiswa',
      component: Login,
    },
    {
      id: 2,
      path: '/loginAdmin',
      component: AdminLogin,
    },
  ];
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        {ProtectedRouteData.map((data) => {
          return <ProtectedRoute component={data.component} path={data.path} />;
        })}
      </Switch>
    </Router>
  );
}

export default App;
