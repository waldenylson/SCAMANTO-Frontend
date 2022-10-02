import React from 'react';
import { Calendar } from 'rsuite';

import { useStyles } from './styles';

const CalendarCompact: React.FC = () => {
  const classes = useStyles();

  return <Calendar compact className={classes.root} />;
};

export default CalendarCompact;
