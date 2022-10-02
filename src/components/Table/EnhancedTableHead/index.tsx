import React from 'react';
import { TableHead, TableRow, TableSortLabel, TableCell } from '@mui/material';

import { useStyles } from './styles';

// Helpers
import { Order } from '../../../helpers/getComparator.helper';

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
  order: Order;
  orderBy: string;
}

interface HeadCell {
  id: string;
  label: string;
  align: 'left' | 'center' | 'right' | 'inherit' | 'justify' | undefined;
}

const headCells: HeadCell[] = [
  { id: 'number', label: '#', align: 'left' },
  { id: 'maintenance', label: 'MANUTENÇÃO', align: 'center' },
  { id: 'title', label: 'TÍTULO', align: 'left' },
  { id: 'status', label: 'STATUS', align: 'center' },
];

const EnhancedTableHead: React.FC<EnhancedTableProps> = ({
  order,
  orderBy,
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
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.align || 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
            className="table-head"
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
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
