import React from 'react';
import {
  Grid,
  Typography,
  DialogContent as MuiDialogContent,
  DialogContentText,
} from '@mui/material';

import { useStyles } from './styles';
import { IMainCardData } from '../..';

import PeriodList from '../PeriodList';
import StatusBox from '../StatusBox';

interface IDialogContentData {
  data: IMainCardData;
}

const DialogContent: React.FC<IDialogContentData> = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid item container classes={{ root: classes.root }}>
      <Grid item xs={7}>
        <MuiDialogContent>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <Typography variant="subtitle2" className={classes.title}>
              Descrição das atividades:
            </Typography>
            <Typography variant="body1" className={classes.info}>
              {data.description}
            </Typography>
          </DialogContentText>

          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <Typography variant="subtitle2" className={classes.title}>
              Impacto operacional:
            </Typography>
            <Typography variant="body1" className={classes.info}>
              {data.impact}
            </Typography>
          </DialogContentText>
        </MuiDialogContent>
      </Grid>

      <Grid item xs={4}>
        <MuiDialogContent>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <StatusBox since={data.since} status={data.status} />
            <PeriodList period={data.parsed_periods} />
          </DialogContentText>
        </MuiDialogContent>
      </Grid>
    </Grid>
  );
};

export default DialogContent;
