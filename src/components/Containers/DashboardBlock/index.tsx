import React from 'react';
import { Box } from '@mui/material';

import { useStyles } from './styles';

const DashboardBlock: React.FC = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.root}>{children}</Box>;
};

export default DashboardBlock;
