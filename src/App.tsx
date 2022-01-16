import AdminLogin from './page/adminLogin';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './page/login';
import { ProtectedRoute } from './utils/protectedRoute';
import { useEffect } from 'react';
import useStore from './store/globalState';
import { getCredential } from './sessions/session';
// import BerandaAdmin from './page/admin/beranda';
import Indicators from './page/admin/indicators';
import Admins from './page/admin/admins';
// import Questions from './page/admin/questions';
import Students from './page/admin/students';
import Subjects from './page/admin/subject';
import Diagnostik from './page/admin/diagnostik';
// import QuestionsAnswer from './page/admin/questionsAnswer';
import DiagnostikStudentPage from './page/student/diagnostik_student_answer';
import MateriStudentPage from './page/student/materiStudent';
import TryOut from './page/admin/tryOut';
import LatihanStudentPage from './page/student/latihanStudentPage';
import Exam from './page/admin/exam';
import Ujian from './page/student/ujian';
import ProfilStudent from './page/student/profil';
import * as dotenv from 'dotenv';

export type iData = {
  id: number;
  path: string;
  component: () => JSX.Element;
  role: string;
};

function App() {
  dotenv.config();

  const ProtectedRouteData: iData[] = [
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
      path: '/admins',
      component: Admins,
      role: 'admin',
    },
    {
      id: 4,
      path: '/indicators',
      component: Indicators,
      role: 'admin',
    },
    {
      id: 5,
      path: '/students',
      component: Students,
      role: 'admin',
    },
    {
      id: 6,
      path: '/diagnostik',
      component: Diagnostik,
      role: 'admin',
    },
    {
      id: 7,
      path: '/subjects',
      component: Subjects,
      role: 'admin',
    },
    {
      id: 8,
      path: '/diagnostik_student',
      component: DiagnostikStudentPage,
      role: 'student',
    },
    {
      id: 9,
      path: '/materiStudentPage',
      component: MateriStudentPage,
      role: 'student',
    },
    {
      id: 10,
      path: '/latihanStudentPage',
      component: TryOut,
      role: 'admin',
    },
    {
      id: 11,
      path: '/latihanStudentAnswerPage',
      component: LatihanStudentPage,
      role: 'student',
    },
    {
      id: 12,
      path: '/exam',
      component: Exam,
      role: 'admin',
    },
    {
      id: 13,
      path: '/ujian',
      component: Ujian,
      role: 'student',
    },
    {
      id: 14,
      path: '/profil',
      component: ProfilStudent,
      role: 'student',
    },
    {
      id: 15,
      path: '/',
      component: Login,
      role: '',
    },
  ];
  const globalData = useStore((state) => state);

  useEffect(() => {
    if (
      globalData.username === '' &&
      globalData.token === '' &&
      globalData.role === '' &&
      globalData.id === -1
    ) {
      const getData = getCredential();
      if (
        getData.role !== '' &&
        getData.token !== '' &&
        getData.username !== '' &&
        getData.id !== -1
      ) {
        globalData.setRole(getData.role);
        globalData.setToken(getData.token);
        globalData.setUsername(getData.username);
        globalData.setId(getData.id);
      }
    }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/login/siswa'>
          <Login />
        </Route> */}
        {/* <Route exact path='/'>
          <Login />
        </Route> */}
        {/* <Route exact path='/login/admin'>
          <AdminLogin />
        </Route> */}
        {/* <Route exact path='/adminnn'>
          <BerandaAdmin />
        </Route> */}
        {/* <Route exact path='/indicators'>
          <Indicators />
        </Route> */}
        {/* <Route exact path='/admins'>
          <Admins />
        </Route> */}
        {/* <Route exact path='/questions'>
          <Questions />
        </Route>
        <Route exact path='/questionsAnswer'>
          <QuestionsAnswer />
        </Route> */}
        {/* <Route exact path='/studentss'>
          <Students />
        </Route> */}
        {/* <Route exact path='/diagnostik'>
          <Diagnostik />
        </Route> */}
        {/* <Route exact path='/subjects'>
          <Subjects />
        </Route> */}
        {/* <Route exact path='/diagnostik_student'>
          <DiagnostikStudentPage />
        </Route> */}
        {/* <Route exact path='/materiStudentPage'>
          <MateriStudentPage />
        </Route> */}
        {/* <Route exact path='/latihanStudentPage'>
          <TryOut />
        </Route> */}
        {/* <Route exact path='/latihanStudentAnswerPage'>
          <LatihanStudentPage />
        </Route> */}
        {/* <Route exact path='/exam'>
          <Exam />
        </Route> */}
        {/* <Route exact path='/ujian'>
          <Ujian />
        </Route>
        <Route exact path='/profil'>
          <ProfilStudent />
        </Route> */}
        {ProtectedRouteData.map((data: iData) => {
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
