import { Container, Typography } from '@mui/material';
import ButtonAppBar from '../../components/appBar';

const BerandaAdmin = () => {
  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography align='center' variant='h2' sx={{ mt: 5 }}>
          Welcome Admin!
        </Typography>
      </Container>
    </>
  );
};

export default BerandaAdmin;
