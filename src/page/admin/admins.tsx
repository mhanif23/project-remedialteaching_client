import { Container, Typography } from '@mui/material';
import ButtonAppBar from '../../components/appBar';

const Admins = () => {
  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography align='center' variant='h2' sx={{ mt: 5 }}>
          List Adminssss
        </Typography>
      </Container>
    </>
  );
};

export default Admins;
