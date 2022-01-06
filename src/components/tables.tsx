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

export default function DenseTable({
  rows,
  tableName,
  handleClickOpenEditDialog,
  setIdEdit,
  setIdDelete,
  handleClickOpenDelete,
}: {
  rows: any;
  tableName: any;
  handleClickOpenEditDialog: () => void;
  handleCloseEditDialog: () => void;
  handleCloseOpenDelete: () => void;
  handleClickOpenDelete: () => void;
  setIdEdit: React.Dispatch<React.SetStateAction<number>>;
  setIdDelete: React.Dispatch<React.SetStateAction<number>>;
}) {
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
                <TableCell align='center'>{head.name7}&nbsp;</TableCell>
                <TableCell align='center'>{head.name8}&nbsp;</TableCell>
                <TableCell align='center'>{head.name9}&nbsp;</TableCell>
                <TableCell align='center'>{head.name10}&nbsp;</TableCell>
                <TableCell align='center'>{head.name11}&nbsp;</TableCell>
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
                {row.data2 ? (
                  <TableCell align='center'>{row.data2}</TableCell>
                ) : (
                  ''
                )}
                {row.data3 ? (
                  <TableCell align='center'>{row.data3}</TableCell>
                ) : (
                  ''
                )}
                {row.data4 ? (
                  <TableCell align='center'>{row.data4}</TableCell>
                ) : (
                  ''
                )}
                {row.data5 ? (
                  <TableCell align='center'>{row.data5}</TableCell>
                ) : (
                  ''
                )}
                {row.data6 ? (
                  <TableCell align='center'>{row.data6}</TableCell>
                ) : (
                  ''
                )}
                {row.data7 ? (
                  <TableCell align='center'>{row.data7}</TableCell>
                ) : (
                  ''
                )}
                {row.data8 ? (
                  <TableCell align='center'>{row.data8}</TableCell>
                ) : (
                  ''
                )}
                {row.data9 ? (
                  <TableCell align='center'>{row.data9}</TableCell>
                ) : (
                  ''
                )}
                {row.data10 ? (
                  <TableCell align='center'>{row.data10}</TableCell>
                ) : (
                  ''
                )}
                {row.data11 ? (
                  <TableCell align='center'>{row.data11}</TableCell>
                ) : (
                  ''
                )}

                <TableCell align='center'>
                  <Button
                    sx={{ mr: 2 }}
                    variant='outlined'
                    size='small'
                    color='primary'
                    startIcon={<EditIcon />}
                    onClick={() => {
                      setIdEdit(row.id);
                      handleClickOpenEditDialog();
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
                      setIdDelete(row.id);
                      handleClickOpenDelete();
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
    </>
  );
}
