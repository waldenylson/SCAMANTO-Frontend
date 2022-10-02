import { makeStyles, createStyles } from '@mui/material/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#fafafa',
      width: '100%',
      display: 'flex',
      margin: 0,
    },

    contentRoot: {
      padding: 0,

      display: 'flex',
      flexDirection: 'column',

      background: '#fafafa',
    },

    main: {
      padding: '32px 32px 16px',

      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',

      background: '#fafafa',
    },
  }),
);
