import { makeStyles, createStyles } from '@mui/material/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
      gridRow: 2,

      padding: '10px',

      '& .MuiChip-root': {
        width: '117px',
      },
    },
  }),
);
