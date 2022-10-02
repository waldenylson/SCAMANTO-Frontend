import { makeStyles } from '@mui/material';

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',

    '& .MuiDialogContentText-root': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },

  title: {
    marginBottom: 5,
    fontSize: 16,
    color: 'blue',
  },

  info: {
    textAlign: 'justify',
  },
});
