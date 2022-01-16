import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import {
  getIndicatorStudentForExam,
  IndicatorsData,
} from '../../models/indicator';
import ButtonAppBarStudent from './component/appBarStudent';
import ExamPageAnswer from './examPageAnswer';
import useStore from '../../store/globalState';

const Ujian = () => {
  const [matter, setMatter] = React.useState<
    (IndicatorsData & { isDone: number; idDetail: number })[] | null
  >(null);
  const id_student = useStore((state) => state.id);

  const GetDataMatter = async (id_student: number) => {
    const data = await getIndicatorStudentForExam(id_student);
    if (data) {
      setMatter(data);
    }
  };

  useEffect(() => {
    GetDataMatter(id_student);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {matter && matter.length > 0 ? (
        <>
          <ExamPageAnswer />;
        </>
      ) : (
        <>
          <ButtonAppBarStudent />
          <Container>
            <Typography align='center' variant='h2' sx={{ mt: 5 }}>
              Kamu tidak dapat mengikuti Ujian!
            </Typography>
            <Typography align='center' variant='h5' sx={{ mt: 5 }}>
              "Hal tersebut dapat disebabkan latihan yang belum selesai atau
              anda sudah menyelesaikan keseluruhan program"
            </Typography>
          </Container>
        </>
      )}
    </>
  );
};

export default Ujian;
