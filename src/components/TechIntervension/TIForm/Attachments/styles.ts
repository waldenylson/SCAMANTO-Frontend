import { makeStyles, Theme, createStyles } from '@mui/material/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      alignContent: 'space-around',

      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 300,
      },
    },
    previewChip: {
      minWidth: 160,
      maxWidth: 210,
    },
  }),
);
