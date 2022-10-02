import { makeStyles, createStyles } from '@mui/material/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      borderRadius: '8px',
      flexGrow: 1,

      gridColumn: 'span 2',

      boxShadow:
        '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',

      '& strong': {
        fontSize: '12px',
        color: '#83848c',
        textTransform: 'none',
      },

      '& .table-row': {
        '&:hover': {
          background: 'rgba(102, 102, 255,0.03)',
        },
      },
    },

    cardHeader: {
      textTransform: 'none',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(7, 9, 25, 0.125)',
      width: '100%',
      paddingLeft: 20,

      '& span': {
        fontSize: '14px',
      },
    },

    cardContent: {
      padding: '16px',
    },

    table: {
      height: 'auto',
    },

    tableCell: {
      border: 'none',
      fontSize: '.95rem',
      color: '#3b3e66',

      textOverflow: 'ellipsis',
      textTransform: 'uppercase',

      overflow: 'hidden',
      position: 'relative',

      minHeight: '0.5em',
      maxHeight: '0.5em',

      lineHeight: '1em',
    },

    cardFooter: {
      borderTop: '1px solid rgba(7, 9, 25, 0.125)',
      padding: '12px 20px',
    },

    chipRoot: {
      width: '117px',
      height: '20px',
      borderRadius: '5px',
      fontSize: '70%',
      fontWeight: 700,
    },

    approved: {
      backgroundColor: '#1bc943',
    },

    authorized: {
      backgroundColor: '#5383ff',
    },

    requested: {
      backgroundColor: '#2c3e50',
    },

    coordinating: {
      backgroundColor: '#f4772e',
    },

    canceled: {
      backgroundColor: '#8f0621',
    },

    rejected: {
      backgroundColor: '#f83245',
    },

    preventive: {
      borderColor: '#5383ff',
      color: '#5383ff',
    },

    update: {
      borderColor: '#f4772e',
      color: '#f4772e',
    },

    corrective: {
      borderColor: '#1bc943',
      color: '#1bc943',
    },
  }),
);
