import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import {
  checkstudentDiagnostikAnswer,
  iDiagnostikAnswer,
} from '../../models/indicator';
import ButtonAppBarStudent from './component/appBarStudent';
import DiagnostikPageAnswer from './diagnostikPageAnswer';
import useStore from '../../store/globalState';

const DiagnostikStudentPage = () => {
  const [studentStatus, setstudentStatus] =
    React.useState<iDiagnostikAnswer[]>();

  const GetDataMatter = async (id_student: number) => {
    const data = await checkstudentDiagnostikAnswer(id_student);
    setstudentStatus(data);
  };
  const idStudent = useStore((state) => state.id);

  useEffect(() => {
    GetDataMatter(idStudent);
  }, [idStudent]);

  if (studentStatus && studentStatus.length === 0) {
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
