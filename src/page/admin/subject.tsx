import { Container, Typography } from '@mui/material';
import ButtonAppBar from '../../components/appBar';

const Subjects = () => {
  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography align='center' variant='h2' sx={{ mt: 5 }}>
          List Subjects
        </Typography>
      </Container>
    </>
  );
};

export default Subjects;
