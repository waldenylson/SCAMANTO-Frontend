import React from 'react';
import {
  IconButton,
  Drawer,
  Divider,
  ListItemIcon,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { Inbox, Mail, Menu, ChevronLeft } from '@material-ui/icons';
import clsx from 'clsx';

import { useStyles } from './styles';

import FSDialog from '../GenericFullScreenDialog';

import TI from '../TechIntervension';

import TransferList from '../TICoordination';

const MiniDrawer: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleClose = React.useCallback(() => {
    setDialogOpen(false);
  }, []);

  const dialogHandler = React.useCallback(() => {
    handleClose();
  }, [handleClose]);

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div
        className={clsx({
          [classes.toolbarOpen]: open,
          [classes.toolbarClose]: !open,
        })}
      >
        <IconButton onClick={handleDrawer} className={classes.iconButton}>
          {open ? <ChevronLeft /> : <Menu />}
        </IconButton>
      </div>

      <List
        subheader={
          open ? (
            <ListSubheader color="inherit">Teste</ListSubheader>
          ) : (
            <Divider className={classes.divider} variant="middle" />
          )
        }
      >
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.iconButton}>
              {index % 2 === 0 ? <Inbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider className={classes.divider} variant="middle" />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.iconButton}>
              {index % 2 === 0 ? <Inbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem button>
          <ListItemText onClick={() => setDialogOpen(true)}>
            Nova FCM
          </ListItemText>
          <FSDialog
            open={dialogOpen}
            dialogHandler={dialogHandler}
            dialogTitle="Nova Coordenação de Manutenção"
          >
            <TI />
          </FSDialog>
        </ListItem>
      </List>
      {/* <List>
        <ListItem button>
          <ListItemText onClick={() => setDialogOpen(true)}>
            Testar FC
          </ListItemText>
          <FSDialog
            open={dialogOpen}
            dialogHandler={dialogHandler}
            dialogTitle="Coordenar Setores Impactados pela Manutenção"
          >
            <TransferList />
          </FSDialog>
        </ListItem>
      </List> */}
    </Drawer>
  );
};

export default MiniDrawer;
