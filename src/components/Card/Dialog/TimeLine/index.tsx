import React from 'react';
import { Typography } from '@mui/material';
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@material-ui/lab/';

import { useStyles } from './styles';

interface IHistoryData {
  id: string;
  user: string;
  date: Date | string;
  action: string;
}

interface IHistory {
  history: IHistoryData[];
}

const Timeline: React.FC<IHistory> = ({ history }) => {
  const classes = useStyles();

  const lastIndex = React.useCallback(
    item => {
      const lastItem = [...history].pop();

      return lastItem === item;
    },
    [history],
  );

  return (
    <MuiTimeline className={classes.root}>
      {history.map(item => (
        <TimelineItem key={item.id}>
          <TimelineOppositeContent>
            <Typography color="textSecondary">
              {new Date(item.date).toLocaleString()}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            {!lastIndex(item) ? (
              <>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </>
            ) : (
              <TimelineDot color="primary" />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="subtitle2">{item.user}</Typography>
            <Typography>({item.action})</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
};

export default Timeline;
