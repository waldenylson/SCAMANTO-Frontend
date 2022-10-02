import { makeStyles } from '@mui/material';

export const useStyles = makeStyles({
  root: {
    color: 'black',
    width: 350,
    marginLeft: 50,
    marginTop: 10,

    borderRadius: 5,
    boxShadow:
      '1px 3px 3px -2px rgba(102, 102, 255,0.2), 0px 3px 4px 0px rgba(102, 102, 255,0.14), 0px 1px 8px 0px rgba(102, 102, 255,0.12)',

    '& .MuiListItemText-secondary': {
      fontSize: 12,
    },
  },

  title: {
    margin: 10,
  },

  avatar: {
    backgroundColor: '#6666ff',
    color: 'white',
  },
});
