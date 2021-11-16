import { Container, Typography } from '@mui/material';
import ButtonAppBar from '../../components/appBar';

const Students = () => {
  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography align='center' variant='h2' sx={{ mt: 5 }}>
          List Students
        </Typography>
      </Container>
    </>
  );
};

export default Students;
