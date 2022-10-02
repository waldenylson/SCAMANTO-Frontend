import { makeStyles } from '@mui/material/styles';

export const useStyles = makeStyles({
  root: {
    flex: 1,
  },

  gridRoot: {
    flex: 1,
  },

  elapsedStatus: {
    fontSize: 13,
    fontWeight: 500,
    textAlign: 'right',

    color: '#6666ff',

    paddingTop: 5,
    paddingRight: 55,
    paddingBottom: 5,

    backgroundColor: 'inherit',
  },

  timeline: {
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',
    justifyContent: 'center',

    paddingTop: 15,

    overflow: 'hidden',

    boxShadow:
      '1px 3px 3px -2px rgba(102, 102, 255,0.2), 0px 3px 4px 0px rgba(102, 102, 255,0.14), 0px 1px 8px 0px rgba(102, 102, 255,0.12)',

    borderRadius: 5,
    backgroundColor: 'rgb(102, 102, 255,0.08)',

    '& .MuiTypography-root': {
      fontSize: 12,
    },

    '& .MuiTypography-subtitle2': {
      fontSize: 14,
    },
  },

  impactBlock: {
    boxShadow:
      '1px 3px 3px -2px rgba(255, 102, 102,0.2), 0px 3px 4px 0px rgba(255, 102, 102,0.14), 0px 1px 8px 0px rgba(255, 102, 102,0.12)',
  },
});
