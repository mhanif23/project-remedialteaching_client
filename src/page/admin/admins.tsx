import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import ButtonAppBar from '../../components/appBar';
import DenseTable from '../../components/tables';

const Admins = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function createData(
    id: string,
    name: string,
    data1: string,
    data2: string,
    data3: string,
    data4: string,
  ) {
    return { id, name, data1, data2, data3, data4 };
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
    createName('Nama1', 'Nama2', 'Nama3', 'Nama4', 'Nama5', 'Action'),
  ];

  const rows = [
    createData('1', 'Frozen yoghurt', '159', '6.0', '24', '4.0'),
    createData('2', 'Ice cream sandwich', '237', '9.0', '37', '4.3'),
    createData('3', 'Eclair', '262', '16.0', '24', '6.0'),
    createData('4', 'Cupcake', '305', '3.7', '67', '4.3'),
    createData('5', 'Gingerbread', '356', '16.0', '49', '3.9'),
  ];
  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography align='center' variant='h2' sx={{ mt: 5 }}>
          Admin List
        </Typography>
        <Box>
          <DenseTable rows={rows} tableName={tableName} />
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
    </>
  );
};

export default Admins;
