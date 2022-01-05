import { Alert, Snackbar } from '@mui/material';

export const Toast = ({
  open,
  handleClose,
  message,
  severity,
}: {
  open: boolean;
  handleClose: () => void;
  message: string;
  severity: 'success' | 'warning' | 'info' | 'error';
}) => {
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
