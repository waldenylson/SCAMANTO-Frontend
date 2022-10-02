import { makeStyles } from '@mui/material';

export const useStyles = makeStyles({
  root: {
    marginBottom: 10,
    justifyContent: 'center',

    boxShadow:
      '1px 3px 3px -2px rgba(0, 102, 51,0.2), 0px 3px 4px 0px rgba(0, 102, 51,0.14), 0px 1px 8px 0px rgba(0, 102, 51,0.12)',

    '& .MuiAlertTitle-root': {
      fontSize: 18,
    },

    '& .MuiAlert-message': {
      fontSize: 12,
      textAlign: 'center',
    },
  },

  rootApproved: {
    boxShadow:
      '1px 3px 3px -2px rgba(183, 223, 185,0.2), 0px 3px 4px 0px rgba(0, 102, 51,0.14), 0px 1px 8px 0px rgba(0, 102, 51,0.12)',

    backgroundColor: 'rgb(237, 247, 237)',

    '& .MuiAlert-message': {
      color: 'rgb(30, 70, 32)',
    },
  },

  rootAuthorized: {
    boxShadow:
      '1px 3px 3px -2px rgba(166, 213, 250,0.2), 0px 3px 4px 0px rgba(102, 102, 255,0.14), 0px 1px 8px 0px rgba(102, 102, 255,0.12)',
    backgroundColor: 'rgb(232, 244, 253)',

    '& .MuiAlert-message': {
      color: 'rgb(13, 60, 97)',
    },
  },

  rootCoordinating: {
    boxShadow:
      '1px 3px 3px -2px rgba(244, 119, 46,0.2), 0px 3px 4px 0px rgba(244, 119, 46,0.14), 0px 1px 8px 0px rgba(244, 119, 46,0.12)',
    backgroundColor: 'rgb(255, 200, 217)',

    '& .MuiAlert-message': {
      color: 'rgba(244, 119, 46)',
    },
  },

  rootRejected: {
    boxShadow:
      '1px 3px 3px -2px rgba(255, 213, 153,0.2), 0px 3px 4px 0px rgba(255, 153, 51,0.14), 0px 1px 8px 0px rgba(255, 153, 51,0.12)',
    backgroundColor: 'rgb(255, 244, 229)',

    '& .MuiAlert-message': {
      color: 'rgb(102, 60, 0)',
    },
  },

  rootCancelled: {
    boxShadow:
      '1px 3px 3px -2px rgba(250, 179, 174,0.2), 0px 3px 4px 0px rgba(255, 102, 102,0.14), 0px 1px 8px 0px rgba(255, 102, 102,0.12)',
    backgroundColor: 'rgb(253, 236, 234)',

    '& .MuiAlert-message': {
      color: 'rgb(97, 26, 21)',
    },
  },
});
