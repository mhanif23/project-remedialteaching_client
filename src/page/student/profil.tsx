import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import {
  getExamBoard,
  getStudentInfoApi,
  getTryOutBoard,
  iBoard,
  iStudents,
} from '../../models/student';
import Typography from '@mui/material/Typography';

import ButtonAppBarStudent from './component/appBarStudent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import useStore from '../../store/globalState';

const ProfilStudent = () => {
  const [boardTryOut, setboardTryOut] = React.useState<iBoard[]>([]);
  const token = useStore((state) => state.token);
  const idStudent = useStore((state) => state.id);
  const [boardExam, setboardExam] = React.useState<iBoard[]>([]);
  const [studentInfo, setStudentInfo] = React.useState<iStudents>();
  const getBoardTO = async () => {
    const data = await getTryOutBoard(idStudent, token);
    console.log(data);
    setboardTryOut(data);
  };
  const getBoardExam = async () => {
    const data = await getExamBoard(idStudent, token);
    setboardExam(data);
  };
  const getStudentInfo = async () => {
    const data = await getStudentInfoApi(idStudent, token);
    setStudentInfo(data);
  };

  useEffect(() => {
    getBoardTO();
    getBoardExam();
    getStudentInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function createData(index: number, nilai: number, tanggal: string) {
    return { index, nilai, tanggal };
  }

  const rows: { index: number; nilai: number; tanggal: string }[] = [];
  boardTryOut.forEach((e, index) => {
    rows.push(createData(index + 1, e.nilai, String(new Date(e.created_At))));
  });

  const rowsExam: { index: number; nilai: number; tanggal: string }[] = [];
  boardExam.forEach((val, index) => {
    rowsExam.push(
      createData(index + 1, val.nilai, String(new Date(val.created_At))),
    );
  });
  return (
    <>
      <Box>
        <ButtonAppBarStudent />
        <Typography align='center' variant='h4' sx={{ mt: 5, mb: 5 }}>
          Hi,{studentInfo?.student_name} !
        </Typography>
        <Typography align='center' variant='h6' sx={{ mt: 5, mb: 5 }}>
          Username kamu adalah {studentInfo?.username} dan kamu berasal dari
          kelas {studentInfo?.class}
        </Typography>
        <Container>
          <Typography align='center' variant='h5' sx={{ mt: 8, mb: 2 }}>
            Tabel Nilai Try Out
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Banyak Percobaan</TableCell>
                  <TableCell align='right'>Nilai</TableCell>
                  <TableCell align='right'>Tanggal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {row.index}
                    </TableCell>
                    <TableCell align='right'>{row.nilai}</TableCell>
                    <TableCell align='right'>{row.tanggal}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography align='center' variant='h5' sx={{ mt: 8, mb: 2 }}>
            Tabel Nilai Exam
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Banyak Percobaan</TableCell>
                  <TableCell align='right'>Nilai</TableCell>
                  <TableCell align='right'>Tanggal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsExam.map((r) => (
                  <TableRow
                    key={r.index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {r.index}
                    </TableCell>
                    <TableCell align='right'>{r.nilai}</TableCell>
                    <TableCell align='right'>{r.tanggal}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

export default ProfilStudent;
