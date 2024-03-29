import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import {
  getIndicatorStudentForTryOut,
  IndicatorsData,
} from '../../models/indicator';
import ButtonAppBarStudent from './component/appBarStudent';
import TryOutPageAnswer from './tryOutPageAnswer';
import useStore from '../../store/globalState';

const LatihanStudentPage = () => {
  const [matter, setMatter] = React.useState<
    (IndicatorsData & { isDone: number; idDetail: number })[] | null
  >(null);
  const idStudent = useStore((state) => state.id);

  const GetDataMatter = async (id_student: number) => {
    const data = await getIndicatorStudentForTryOut(id_student);
    if (data) {
      setMatter(data);
    }
  };

  useEffect(() => {
    GetDataMatter(idStudent);
  }, [idStudent]);

  return (
    <>
      {matter && matter.length > 0 ? (
        <>
          <TryOutPageAnswer />;
        </>
      ) : (
        <>
          <ButtonAppBarStudent />
          <Container>
            <Typography align='center' variant='h2' sx={{ mt: 5 }}>
              Kamu tidak dapat mengikuti latihan!
            </Typography>
            <Typography align='center' variant='h5' sx={{ mt: 5 }}>
              "Hal tersebut dapat disebabkan materi yang belum selesai atau anda
              sudah menyelesaikan keseluruhan materi"
            </Typography>
          </Container>
        </>
      )}
    </>
  );
};

export default LatihanStudentPage;
