import { makeStyles, createStyles } from '@mui/material/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'grid',
      gridAutoFlow: 'row',
      gap: 32,
    },
  }),
);
