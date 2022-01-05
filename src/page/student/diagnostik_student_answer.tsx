import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { getAnswerDiagnostikStudent } from '../../models/student';
import ButtonAppBarStudent from './component/appBarStudent';
import DiagnostikPageAnswer from './diagnostikPageAnswer';

const DiagnostikStudentPage = () => {
  const [studentStatus, setstudentStatus] = React.useState('new');

  async function getStudentInfo() {
    const data = await getAnswerDiagnostikStudent(13);
    if (data === 0) {
      setstudentStatus('new');
    } else {
      setstudentStatus('old');
    }
  }
  useEffect(() => {
    getStudentInfo();
  }, [studentStatus]);
  if (studentStatus === 'new') {
    return <DiagnostikPageAnswer />;
  } else {
    return (
      <>
        <ButtonAppBarStudent />
        <Container>
          <Typography align='center' variant='h2' sx={{ mt: 5 }}>
            Kamu sudah mengerjakan diagnostik!
          </Typography>
        </Container>
      </>
    );
  }
};

export default DiagnostikStudentPage;
