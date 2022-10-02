import React from 'react';

import {
  Dialog,
  DialogTitle,
  DialogProps,
  Typography,
  Grid,
} from '@mui/material';

import { useStyles } from './styles';

import { IMainCardData } from '..';
import Timeline from './TimeLine';
import DialogContent from './DialogContent';
import AppBar from './AppBar';

export interface IDialogData extends DialogProps {
  dialogHandler: () => void;
  open: DialogProps['open'];
  data: IMainCardData;
}

const DialogModal: React.FC<IDialogData> = ({
  data,
  open,
  dialogHandler,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={dialogHandler}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      classes={{ root: classes.root }}
      {...otherProps}
    >
      <AppBar data={data} dialogHandler={dialogHandler} open={open} />

      <Grid container className={classes.gridRoot}>
        <Grid item xs="auto" className={classes.timeline}>
          <Typography variant="subtitle2">Histórico</Typography>
          <Timeline history={data.history} />
        </Grid>

        <Grid item xs={12} sm container>
          <Grid item xs={12}>
            <DialogTitle id="scroll-dialog-title">{data.title}</DialogTitle>
            <DialogContent data={data} />
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default DialogModal;
