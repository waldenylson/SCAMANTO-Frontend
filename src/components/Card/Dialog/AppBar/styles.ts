import { makeStyles } from '@mui/material';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    cursor: 'pointer',

    '& .MuiIconButton-root': {
      marginRight: 15,
    },
  },

  title: {
    width: '30%',
  },

  stepper: {
    flex: 1,
    backgroundColor: 'inherit',

    '& .MuiStepIcon-root': {
      color: 'rgba(255, 255, 255,0.5)',
    },

    '& .MuiStepLabel-label': {
      color: 'rgba(255, 255, 255,0.5)',
    },

    '& .MuiStepIcon-completed': {
      color: 'white',
    },

    '& .MuiStepLabel-completed': {
      color: 'white',
    },

    '& .MuiStepIcon-active': {
      color: 'white',

      '& .MuiStepIcon-text': {
        fill: '#6666ff',
        fontWeight: 700,
      },
    },

    '& .MuiStepLabel-active': {
      color: 'white',
    },
  },
});
