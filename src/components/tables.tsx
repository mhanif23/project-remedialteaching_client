import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AlertDialog from './deleteDialogBox';
import { useState } from 'react';
import FullScreenDialog from './dialogFullScreen';

export default function DenseTable({
  rows,
  tableName,
}: {
  rows: any;
  tableName: any;
}) {
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [id, setId] = useState<number>(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            {tableName.map((head: any) => (
              <TableRow>
                <TableCell align='center'>{head.name1}</TableCell>
                <TableCell align='center'>{head.name2}</TableCell>
                <TableCell align='center'>{head.name3}&nbsp;</TableCell>
                <TableCell align='center'>{head.name4}&nbsp;</TableCell>
                <TableCell align='center'>{head.name5}&nbsp;</TableCell>
                <TableCell align='center'>{head.name6}&nbsp;</TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='center' component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='center'>{row.data1}</TableCell>
                <TableCell align='center'>{row.data2}</TableCell>
                <TableCell align='center'>{row.data3}</TableCell>
                <TableCell align='center'>{row.data4}</TableCell>
                <TableCell align='center'>
                  <Button
                    sx={{ mr: 2 }}
                    variant='outlined'
                    size='small'
                    color='primary'
                    startIcon={<EditIcon />}
                    onClick={() => {
                      setId(row.id);
                      handleClickOpenEdit();
                    }}
                  >
                    {' '}
                    Edit
                  </Button>
                  <Button
                    variant='outlined'
                    size='small'
                    color='warning'
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      setId(row.id);
                      handleClickOpen();
                    }}
                  >
                    {' '}
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AlertDialog open={open} handleClose={handleClose} id={id} />
      <FullScreenDialog open={openEdit} handleClose={handleCloseEdit} id={id} />
    </>
  );
}
