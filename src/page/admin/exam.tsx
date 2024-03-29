import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import ButtonAppBar from '../../components/appBar';
import DenseTable from '../../components/tables';
import {
  createExamQuestion,
  deleteExamQuestion,
  getSoalExam,
  iExam_question,
  updateExamQuestion,
} from '../../models/Exam';

import { IndicatorsData, getIndicatorBySubject } from '../../models/indicator';

import { getSubject, SubjectsData } from '../../models/subjects';
import useStore from '../../store/globalState';

const Exam = () => {
  const [open, setOpen] = React.useState(false);
  const [idEdit, setIdEdit] = React.useState(-1);
  const [idDelete, setIdDelete] = React.useState(-1);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [soalExam, setSoalExam] = React.useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    option5: '',
    trueAnswer: '',
    media: '',
    idIndicator: '',
    idSubject: '',
  });
  const token = useStore((state) => state.token);

  const [dataSubject, setdataSubject] = React.useState<
    SubjectsData[] | undefined
  >(undefined);

  const [dataIndicator, setdataIndicator] = React.useState<
    IndicatorsData[] | undefined
  >(undefined);

  const ChangeValueNewAdminSelect = (event: SelectChangeEvent) => {
    setSoalExam({
      ...soalExam,
      idSubject: String(event.target.value),
    });
  };

  const ChangeValueIndicator = (event: SelectChangeEvent) => {
    setSoalExam({
      ...soalExam,
      idIndicator: String(event.target.value),
    });
  };

  async function subject() {
    const data = await getSubject(token);
    setdataSubject(data);
  }
  useEffect(() => {
    subject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function Indicator() {
    const data = await getIndicatorBySubject(Number(soalExam.idSubject));
    setdataIndicator(data);
  }
  useEffect(() => {
    Indicator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soalExam.idSubject]);

  const [soalExamall, setSoalExamAll] = React.useState<
    iExam_question[] | undefined
  >(undefined);

  // eslint-disable-next-line no-restricted-globals
  const ChangeValueNewAdmin = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSoalExam({ ...soalExam, [e.target.id]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenEditDialog = () => {
    setOpenEdit(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEdit(false);
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseOpenDelete = () => {
    setOpenDelete(false);
  };

  function createData(
    id: number,
    data1: string,
    data2: string,
    data3: string,
    data4: string,
    data5: string,
    data6: string,
    data7: string,
    data8: string,
    data9: number,
    data10: number,
    name: string,
  ) {
    return {
      id,
      data1,
      data2,
      data3,
      data4,
      data5,
      data6,
      data7,
      data8,
      data9,
      data10,
      name,
    };
  }

  function createName(
    name1: string,
    name2: string,
    name3: string,
    name4: string,
    name5: string,
    name6: string,
    name7: string,
    name8: string,
    name9: string,
    name10: string,
  ) {
    return {
      name1,
      name2,
      name3,
      name4,
      name5,
      name6,
      name7,
      name8,
      name9,
      name10,
    };
  }

  const tableName = [
    createName(
      'no',
      'pertanyaan',
      'opsi1',
      'opsi2',
      'opsi3',
      'opsi4',
      'opsi5',
      'media',
      'jawaban',
      'id_subjek',
    ),
  ];

  const rows: {
    id: number;
    data1: string;
    data2: string;
    data3: string;
    data4: string;
    data5: string;
    data6: string;
    data7: string;
    data8: string;
    name: string;
  }[] = [];
  async function soalDiangostik() {
    const data = await getSoalExam();
    setSoalExamAll(data);
  }

  useEffect(() => {
    soalDiangostik();
  }, [open, openEdit, openDelete]);

  useEffect(() => {
    const soal = soalExamall?.find((e) => e.id === idEdit);
    if (soal) {
      setSoalExam({
        question: soal.question,
        option1: soal.option1,
        option2: soal.option2,
        option3: soal.option3,
        option4: soal.option4,
        option5: soal.option5,
        media: soal.media ? soal.media : '-',
        trueAnswer: soal.trueAnswer,
        idIndicator: String(soal.idIndicator),
        idSubject: String(soal.idSubject),
      });
    }
  }, [idEdit, soalExamall]);

  // eslint-disable-next-line array-callback-return
  soalExamall?.map((e, index) => {
    rows.push(
      createData(
        e.id,
        e.question,
        e.option1,
        e.option2,
        e.option3,
        e.option4,
        e.option5,
        e.media ? e.media : ' ',
        e.trueAnswer,
        e.idIndicator,
        e.idSubject,

        String(index + 1),
      ),
    );
  });
  const create = async () => {
    const data = await createExamQuestion(soalExam, token);
    console.log(data);
    if ((await data) === true) {
      handleClose();
      soalDiangostik();
    } else {
      setSoalExam({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: '',
        trueAnswer: '',
        media: '',
        idIndicator: '',
        idSubject: '',
      });
      setIdEdit(-1);
      handleClose();
    }
  };

  const deleteExam = async () => {
    const data = deleteExamQuestion(idDelete, token);
    if ((await data) === true) {
      handleCloseOpenDelete();
      soalDiangostik();
    } else {
      setSoalExam({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: '',
        trueAnswer: '',
        media: '',
        idIndicator: '',
        idSubject: '',
      });
      setIdDelete(-1);
      handleCloseOpenDelete();
    }
  };

  const update = async () => {
    const data = updateExamQuestion(idEdit, soalExam, token);
    if ((await data) === true) {
      handleCloseEditDialog();
      soalDiangostik();
    } else {
      setSoalExam({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: '',
        trueAnswer: '',
        media: '',
        idIndicator: '',
        idSubject: '',
      });
      handleCloseEditDialog();
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography align='center' variant='h2' sx={{ mt: 5 }}>
          Daftar Soal Exam
        </Typography>
        <Box>
          <DenseTable
            rows={rows}
            handleClickOpenEditDialog={handleClickOpenEditDialog}
            handleCloseEditDialog={handleCloseEditDialog}
            setIdEdit={setIdEdit}
            setIdDelete={setIdDelete}
            handleClickOpenDelete={handleClickOpenDelete}
            handleCloseOpenDelete={handleCloseOpenDelete}
            tableName={tableName}
          />
        </Box>
        <Button
          autoFocus
          variant='contained'
          color='primary'
          onClick={handleClickOpen}
          sx={{ mt: 2 }}
        >
          add New
        </Button>
      </Container>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Form Exam Soal</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='question'
            label='Soal'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.question}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>subject</DialogContentText>
          <Select
            fullWidth
            value={soalExam.idSubject}
            label='Subject'
            onChange={(e: SelectChangeEvent) => {
              ChangeValueNewAdminSelect(e);
            }}
          >
            {dataSubject?.map((e) => {
              return <MenuItem value={e.id}>{e.name}</MenuItem>;
            })}
          </Select>
        </DialogContent>
        <DialogContent>
          <DialogContentText>Indicator</DialogContentText>
          <Select
            disabled={soalExam.idSubject === '' ? true : false}
            fullWidth
            value={soalExam.idIndicator}
            label='indicator'
            onChange={(e: SelectChangeEvent) => {
              ChangeValueIndicator(e);
            }}
          >
            {dataIndicator?.map((e) => {
              return <MenuItem value={e.id}>{e.code_number}</MenuItem>;
            })}
          </Select>
        </DialogContent>

        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='option1'
            label='option1'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.option1}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='option2'
            label='option2'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.option2}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='option3'
            label='option3'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.option3}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='option4'
            label='option4'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.option4}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='option5'
            label='option5'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.option5}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='media'
            label='media'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.media}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='trueAnswer'
            label='trueAnswer'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.trueAnswer}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={create}>Create</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEdit} onClose={handleCloseEditDialog} fullWidth>
        <DialogTitle>Form Exam Soal</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='question'
            label='question'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.question}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>subject</DialogContentText>
          <Select
            fullWidth
            value={soalExam.idSubject}
            label='Subject'
            onChange={(e: SelectChangeEvent) => {
              ChangeValueNewAdminSelect(e);
            }}
          >
            {dataSubject?.map((e) => {
              return <MenuItem value={e.id}>{e.name}</MenuItem>;
            })}
          </Select>
        </DialogContent>
        <DialogContent>
          <DialogContentText>indicator</DialogContentText>
          <Select
            disabled={soalExam.idSubject === '' ? true : false}
            fullWidth
            value={soalExam.idIndicator}
            label='indicator'
            onChange={(e: SelectChangeEvent) => {
              ChangeValueIndicator(e);
            }}
          >
            {dataIndicator?.map((e) => {
              return <MenuItem value={e.id}>{e.code_number}</MenuItem>;
            })}
          </Select>
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='option1'
            label='option1'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.option1}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='option2'
            label='option2'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.option2}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='option3'
            label='option3'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.option3}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='option4'
            label='option4'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.option4}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='option5'
            label='option5'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.option5}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='media'
            label='media'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.media}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>

        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='trueAnswer'
            label='trueAnswer'
            type='string'
            fullWidth
            variant='standard'
            value={soalExam.trueAnswer}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button onClick={update}>Update</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDelete}
        onClose={handleCloseOpenDelete}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Delete this data?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure to delete this {idDelete}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOpenDelete}>Cancel</Button>
          <Button onClick={deleteExam} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Exam;
