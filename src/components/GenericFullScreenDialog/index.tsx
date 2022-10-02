import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import Slide from '@mui/material/Slide';
import {
  DialogProps,
  AppBar,
  Dialog,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import { useStyles } from './styles';

export interface IDialogData extends DialogProps {
  dialogHandler: () => void;
  open: DialogProps['open'];
  dialogTitle: string;
}

const Transition = React.forwardRef(function Transition(
  // eslint-disable-next-line react/require-default-props
  props: TransitionProps & { children?: React.ReactElement<any, any> }, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const FSDialog: React.FC<IDialogData> = ({
  open,
  dialogHandler,
  children,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={dialogHandler}
      TransitionComponent={Transition}
      transitionDuration={{ enter: 600, exit: 300 }}
      {...otherProps}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={dialogHandler}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {otherProps.dialogTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  );
};

export default FSDialog;
