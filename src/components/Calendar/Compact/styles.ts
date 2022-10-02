import { makeStyles, createStyles } from '@mui/material/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '350px',
      borderRadius: 8,
      boxShadow:
        '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',

      color: '#3b3e66',
    },
  }),
);
