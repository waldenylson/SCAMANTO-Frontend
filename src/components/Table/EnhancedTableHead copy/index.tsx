import React from 'react';
import { TableHead, TableRow, TableSortLabel, TableCell } from '@mui/material';

import { useStyles } from './styles';

// Helpers
import { Order } from '../../../helpers/getComparator.helper';

interface EnhancedTableProps {
  headCells: Array<string>;
  headLabels: Array<string>;
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
  order: Order;
  orderBy: string;
}

const EnhancedTableHead: React.FC<EnhancedTableProps> = ({
  order,
  orderBy,
  headCells,
  headLabels,
  onRequestSort,
}) => {
  const classes = useStyles();

  const createSortHandler =
    (property: any) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead className={classes.root}>
      <TableRow>
        {headCells.map((element, index) => (
          <TableCell
            key={element}
            sortDirection={orderBy === element ? order : false}
          >
            <TableSortLabel
              active={orderBy === element}
              direction={orderBy === element ? order : 'asc'}
              onClick={createSortHandler(element)}
            >
              {headLabels[index]}
              {orderBy === element ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
