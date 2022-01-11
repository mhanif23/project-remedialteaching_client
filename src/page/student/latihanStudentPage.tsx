import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import {
  getIndicatorStudentForMatter,
  IndicatorsData,
} from '../../models/indicator';
import ButtonAppBarStudent from './component/appBarStudent';

const LatihanStudentPage = () => {
  const [readyToLatihan, setreadyToLatihan] = React.useState(false);

  const [matter, setMatter] = React.useState<
    (IndicatorsData & { isDone: number; idDetail: number })[] | null
  >(null);

  const GetDataMatter = async (id_student: number) => {
    const data = await getIndicatorStudentForMatter(id_student);
    setMatter(data);
  };

  useEffect(() => {
    GetDataMatter(14);
  }, []);

  useEffect(() => {
    if (matter && matter?.length !== 0) {
      let isReady = true;
      matter.forEach((e) => {
        if (e.isDone !== 2) {
          isReady = false;
        }
      });
      setreadyToLatihan(isReady);
    }
  }, [matter]);

  return (
    <>
      <ButtonAppBarStudent />

      {readyToLatihan === true ? (
        <>
          <div>as</div>
        </>
      ) : (
        <>
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
