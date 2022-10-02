import { makeStyles, createStyles } from '@mui/material/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#F4F5FD',
    },

    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }),
);
