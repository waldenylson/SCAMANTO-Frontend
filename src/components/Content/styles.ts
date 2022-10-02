import { makeStyles, createStyles } from '@mui/material/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 1,
      display: 'flex',
      padding: '10px',
    },
  }),
);
