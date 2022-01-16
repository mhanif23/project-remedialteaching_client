import React, { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Container,
  Icon,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import ButtonAppBarStudent from './component/appBarStudent';
import CheckIcon from '@mui/icons-material/Check';
import {
  getIndicatorStudentForMatter,
  IndicatorsData,
} from '../../models/indicator';
import { updateStatus } from '../../models/detail_contract';
import useStore from '../../store/globalState';

const MateriStudentPage = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [isReadyToTryOut, setisReadyToTryOut] = React.useState<boolean>(false);
  const [openConfirmation, setopenConfirmation] = React.useState(false);
  const handleopenConfirmation = () => {
    setopenConfirmation(true);
  };
  const handlecloseConfirmation = () => {
    setopenConfirmation(false);
  };
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [matter, setMatter] = React.useState<
    (IndicatorsData & { isDone: number; idDetail: number })[] | null
  >(null);
  const token = useStore((state) => state.token);
  const idStudent = useStore((state) => state.id);

  const GetDataMatter = async (id_student: number) => {
    const data = await getIndicatorStudentForMatter(id_student);
    if (data) {
      setMatter(data);
    }
  };

  useEffect(() => {
    GetDataMatter(idStudent);
  }, [openConfirmation, isReadyToTryOut, idStudent]);

  useEffect(() => {
    if (matter && matter.length !== 0) {
      let isReady = true;
      matter.forEach((e) => {
        if (e.isDone === 0) {
          isReady = false;
        }
      });
      if (matter.length === 0) {
        isReady = false;
      }
      setisReadyToTryOut(isReady);
    }
  }, [matter, openConfirmation]);
  return (
    <>
      <Box>
        <ButtonAppBarStudent />

        {matter && matter?.length !== 0 && matter[0].isDone === 2 ? (
          <>
            <Typography align='center' variant='h4' sx={{ mt: 5, mb: 5 }}>
              Anda sudah bersedia untuk mengikuti latihan!
            </Typography>
          </>
        ) : (
          <>
            <Typography align='center' variant='h4' sx={{ mt: 5, mb: 5 }}>
              Selamat Belajar!
            </Typography>
            <Container>
              {matter !== null &&
                matter.map((e) => {
                  return (
                    <Accordion
                      expanded={expanded === String(e.id)}
                      onChange={handleChange(String(e.id))}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                      >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                          {e.code_number}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                          {e.topic}
                        </Typography>
                        {e.isDone !== 0 && (
                          <Typography
                            sx={{
                              color: 'text.secondary',
                              textAlign: 'right',
                              width: '50%',
                            }}
                          >
                            <Icon>
                              <CheckIcon color='success' />
                            </Icon>
                          </Typography>
                        )}
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{e.description}</Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                          }}
                        >
                          <iframe
                            title={String(e.id)}
                            width={1000}
                            height={1000}
                            src={e.link}
                          ></iframe>
                        </Box>
                        <Button
                          variant='contained'
                          fullWidth
                          sx={{
                            mt: 2,
                          }}
                          disabled={e.isDone === 0 ? false : true}
                          onClick={async () => {
                            await updateStatus(e.idDetail, 1, token);
                            GetDataMatter(idStudent);
                          }}
                        >
                          Mark Done
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              <Button
                variant='contained'
                fullWidth
                sx={{
                  mt: 2,
                }}
                disabled={!isReadyToTryOut}
                onClick={handleopenConfirmation}
              >
                Coba Latihan!
              </Button>
            </Container>
            <Dialog
              open={openConfirmation}
              onClose={handlecloseConfirmation}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle id='alert-dialog-title'>
                {'Siap untuk mengikuti latihan?'}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  Dengan menekan "Siap" anda tidak dapat melihat materi sampai
                  menyelesaikan latihan
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handlecloseConfirmation}>Cancel</Button>
                <Button
                  onClick={async () => {
                    setisReadyToTryOut(false);
                    handlecloseConfirmation();

                    if (matter) {
                      matter.map(async (e) => {
                        await updateStatus(e.idDetail, 2, token);
                      });
                    }
                    setisReadyToTryOut(false);
                  }}
                  autoFocus
                >
                  Siap
                </Button>
              </DialogActions>
            </Dialog>
          </>
        )}
      </Box>
    </>
  );
};

export default MateriStudentPage;
