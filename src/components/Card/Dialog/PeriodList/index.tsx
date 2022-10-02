import React from 'react';
import {
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from '@mui/material';
import { DateRange } from '@material-ui/icons';

import { IMainCardData } from '../..';

import { useStyles } from './styles';

interface IPeriodListData {
  period: IMainCardData;
}

const PeriodList: React.FC<IPeriodListData> = ({ period }) => {
  const classes = useStyles();

  return (
    <List dense classes={{ root: classes.root }}>
      <Typography variant="subtitle2" classes={{ root: classes.title }}>
        Período da intervenção:
      </Typography>
      <Divider />
      {period.map((item: any) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar classes={{ root: classes.avatar }}>
              <DateRange />
            </Avatar>
          </ListItemAvatar>

          <ListItemText primary={item.date} secondary={item.time} />
        </ListItem>
      ))}
    </List>
  );
};

export default PeriodList;
