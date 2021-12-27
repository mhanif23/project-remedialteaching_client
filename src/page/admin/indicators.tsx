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
  TextField,
  Typography,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import React, { useEffect } from 'react';
import ButtonAppBar from '../../components/appBar';
import DenseTable from '../../components/tables';
import {
  updateIndicator,
  deleteIndicatorId,
  IndicatorsData,
  getIndicator,
  createIndicator,
} from '../../models/indicator';
import { getSubject, SubjectsData } from '../../models/subjects';

const Indicators = () => {
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [idEdit, setIdEdit] = React.useState(-1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [idDelete, setIdDelete] = React.useState(-1);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const [dataSubject, setdataSubject] = React.useState<
    SubjectsData[] | undefined
  >(undefined);
  async function subject() {
    const data = await getSubject();
    setdataSubject(data);
  }
  useEffect(() => {
    subject();
  }, [open, openEdit]);

  const [dataNewIndicator, setNewIndicator] = React.useState({
    id_subject: '',
    topic: '',
    description: '',
    code_number: '',
    link: '',
  });

  const deleteIndicator = async () => {
    const data = deleteIndicatorId(idDelete);
    if ((await data) === true) {
      setIdDelete(-1);
      handleCloseOpenDelete();
    } else {
      setNewIndicator({
        id_subject: '',
        topic: '',
        description: '',
        code_number: '',
        link: '',
      });
      setIdDelete(-1);
      handleCloseOpenDelete();
    }
  };

  const update = async () => {
    const data = updateIndicator(idEdit, dataNewIndicator);
    if ((await data) === true) {
      handleCloseEditDialog();
      Indicator();
      setIdEdit(-1);
    } else {
      setNewIndicator({
        id_subject: '',
        topic: '',
        description: '',
        code_number: '',
        link: '',
      });
      handleCloseEditDialog();
    }
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseOpenDelete = () => {
    setOpenDelete(false);
  };

  const handleClickOpenEditDialog = () => {
    setOpenEdit(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEdit(false);
  };
  const [dataIndicator, setdataIndicator] = React.useState<
    IndicatorsData[] | undefined
  >(undefined);

  // eslint-disable-next-line no-restricted-globals
  const ChangeValueNewAdmin = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewIndicator({ ...dataNewIndicator, [e.target.id]: e.target.value });
  };

  const ChangeValueNewAdminSelect = (event: SelectChangeEvent) => {
    setNewIndicator({
      ...dataNewIndicator,
      id_subject: event.target.value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function createData(
    id: number,
    data1: string,
    data2: string,
    data3: string,
    data4: string,
    data5: string,
    name: string,
  ) {
    return { id, data1, data2, data3, data4, data5, name };
  }

  function createName(
    name1: string,
    name2: string,
    name3: string,
    name4: string,
    name5: string,
    name6: string,
  ) {
    return { name1, name2, name3, name4, name5, name6 };
  }

  const tableName = [
    createName('No', 'id_indicator', 'topic', 'desc', 'kd', 'link'),
  ];

  const rows: { id: number; data1: string }[] = [];
  async function Indicator() {
    const data = await getIndicator();
    setdataIndicator(data);
  }
  useEffect(() => {
    Indicator();
  }, [open, openEdit, openDelete]);

  useEffect(() => {
    const Indicator = dataIndicator?.find((e) => e.id === idEdit);
    if (Indicator) {
      setNewIndicator({
        id_subject: String(Indicator.id_subject),
        topic: Indicator.topic,
        description: Indicator.description,
        code_number: Indicator.code_number,
        link: Indicator.link,
      });
    }
  }, [idEdit, dataIndicator]);
  // eslint-disable-next-line array-callback-return
  dataIndicator?.map((e, index) => {
    rows.push(
      createData(
        e.id,
        String(e.id_subject),
        e.topic,
        e.description,
        e.code_number,
        e.link,
        String(index + 1),
      ),
    );
  });

  const create = async () => {
    const data = createIndicator(dataNewIndicator);
    if ((await data) === false) {
    } else {
      setNewIndicator({
        id_subject: '',
        topic: '',
        description: '',
        code_number: '',
        link: '',
      });
      handleClose();
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography align='center' variant='h2' sx={{ mt: 5 }}>
          Indicator List
        </Typography>
        <Box>
          <DenseTable
            rows={rows}
            tableName={tableName}
            handleClickOpenEditDialog={handleClickOpenEditDialog}
            handleCloseEditDialog={handleCloseEditDialog}
            setIdEdit={setIdEdit}
            setIdDelete={setIdDelete}
            handleClickOpenDelete={handleClickOpenDelete}
            handleCloseOpenDelete={handleCloseOpenDelete}
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
        <DialogTitle>Form Indicator</DialogTitle>
        <DialogContent>
          <Select
            fullWidth
            value={dataNewIndicator.id_subject}
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
          <TextField
            autoFocus
            margin='normal'
            id='topic'
            label='topic'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewIndicator.topic}
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
            id='description'
            label='description'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewIndicator.description}
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
            id='code_number'
            label='code_number'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewIndicator.code_number}
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
            id='link'
            label='link'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewIndicator.link}
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
        <DialogTitle>Form Edit Indicator</DialogTitle>
        <DialogContent>
          <Select
            fullWidth
            value={dataNewIndicator.id_subject}
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
          <TextField
            autoFocus
            margin='normal'
            id='topic'
            label='topic'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewIndicator.topic}
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
            id='description'
            label='description'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewIndicator.description}
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
            id='code_number'
            label='code_number'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewIndicator.code_number}
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
            id='link'
            label='link'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewIndicator.link}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button onClick={update}>update</Button>
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
            Are you sure to delete this{' '}
            {
              // eslint-disable-next-line array-callback-return
              dataIndicator?.map((e) => {
                if (e.id === idDelete) {
                  return e.code_number;
                }
              })
            }
            ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOpenDelete}>Cancel</Button>
          <Button onClick={deleteIndicator} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Indicators;
