import { makeStyles, createStyles, Theme } from '@mui/material/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      backgroundColor: 'black',
    },
    drawerOpen: {
      width: drawerWidth,
      borderRightColor: 'transparent',
      backgroundColor: '#121212',

      color: 'white',

      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      borderRightColor: 'transparent',
      backgroundColor: '#121212',

      color: 'white',

      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),

      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7) + 1,
      },
    },
    toolbarOpen: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      backgroundColor: 'inherit',
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    toolbarClose: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(0, 1),
      backgroundColor: 'inherit',
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    iconButton: {
      color: 'white',
    },
    divider: {
      backgroundColor: 'gray',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);
