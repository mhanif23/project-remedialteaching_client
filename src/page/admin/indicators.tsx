import { Container, Typography } from '@mui/material';
import ButtonAppBar from '../../components/appBar';

const Indicators = () => {
  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography align='center' variant='h2' sx={{ mt: 5 }}>
          List Indicators
        </Typography>
      </Container>
    </>
  );
};

export default Indicators;
