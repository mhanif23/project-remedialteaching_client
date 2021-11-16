import { Container, Typography } from '@mui/material';
import ButtonAppBar from '../../components/appBar';

const QuestionsTypes = () => {
  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography align='center' variant='h2' sx={{ mt: 5 }}>
          List QuestionsTypes
        </Typography>
      </Container>
    </>
  );
};

export default QuestionsTypes;
