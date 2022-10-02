import { makeStyles } from '@mui/material';

export const useStyles = makeStyles({
  root: {
    margin: '1%',

    width: '30%',
    height: '13%',

    minWidth: 275,
    minHeight: 165,
  },

  rootApproved: {
    boxShadow:
      '1px 3px 3px -2px rgba(0, 102, 51,0.2), 0px 3px 4px 0px rgba(0, 102, 51,0.14), 0px 1px 8px 0px rgba(0, 102, 51,0.12)',

    '&:hover': {
      backgroundColor: 'rgba(0, 102, 51,0.03)',
    },
  },

  rootAuthorized: {
    boxShadow:
      '1px 3px 3px -2px rgba(102, 102, 255,0.2), 0px 3px 4px 0px rgba(102, 102, 255,0.14), 0px 1px 8px 0px rgba(102, 102, 255,0.12)',

    '&:hover': {
      backgroundColor: 'rgba(102, 102, 255,0.03)',
    },
  },

  rootCoordinating: {
    boxShadow:
      '1px 3px 3px -2px rgba(244, 119, 46,0.2), 0px 3px 4px 0px rgba(244, 119, 46,0.14), 0px 1px 8px 0px rgba(244, 119, 46,0.12)',

    '&:hover': {
      backgroundColor: 'rgba(244, 119, 46,0.03)',
    },
  },

  rootRejected: {
    boxShadow:
      '1px 3px 3px -2px rgba(255, 153, 51,0.2), 0px 3px 4px 0px rgba(255, 153, 51,0.14), 0px 1px 8px 0px rgba(255, 153, 51,0.12)',

    '&:hover': {
      backgroundColor: 'rgba(255, 153, 51,0.03)',
    },
  },

  rootCancelled: {
    boxShadow:
      '1px 3px 3px -2px rgba(255, 102, 102,0.2), 0px 3px 4px 0px rgba(255, 102, 102,0.14), 0px 1px 8px 0px rgba(255, 102, 102,0.12)',

    '&:hover': {
      backgroundColor: 'rgba(255, 102, 102,0.03)',
    },
  },

  status: {
    fontSize: 14,
  },

  statusApproved: {
    color: '#006633',
  },

  statusAuthorized: {
    color: '#6666ff',
  },

  statusRejected: {
    color: '#ff9933',
  },

  statusCancelled: {
    color: '#ff6666',
  },

  statusCoordinating: {
    color: '#660066',
  },

  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',

    marginBottom: 10,
  },

  headerNumber: {
    fontSize: 14,

    '&:hover': {
      color: '#6666ff',
      cursor: 'pointer',
    },
  },

  cardContent: {
    '& span': {
      fontWeight: '500',
      fontSize: 14,

      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    '& p': {
      marginTop: 6,

      fontSize: 13,
      textAlign: 'justify',

      overflow: 'hidden',
      position: 'relative',

      minHeight: '3.6em',
      maxHeight: '3.6em',
      lineHeight: '1.2em',

      '&:before': {
        content: '...',
        position: 'absolute',
        marginRight: '-1em',
        paddingRight: '1em',
        right: 0,
        bottom: 0,
      },

      '&::after': {
        content: '',
        position: 'absolute',
        right: 0,
        width: '1em',
        height: '1em',
        marginTop: '0.2em',
        backgroundColor: 'inherit',
      },
    },
  },

  divider: {
    marginTop: 10,
  },

  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',

    marginTop: 2,
    '& p': {
      fontSize: 12,
      color: '#6666ff',
    },
  },

  progressBar: {
    borderRadius: 5,

    '& div': {
      backgroundColor: '#6666ff',
    },
  },
});
