import { createStyles, makeStyles, Theme } from '@mui/material/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    genericInput: {
      marginLeft: 500,
    },
  }),
);
