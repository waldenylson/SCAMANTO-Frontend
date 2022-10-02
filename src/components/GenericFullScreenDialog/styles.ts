import { makeStyles, createStyles, Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '1%',

      width: '30%',
      height: '13%',

      minWidth: 275,
      minHeight: 165,
    },

    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
);
