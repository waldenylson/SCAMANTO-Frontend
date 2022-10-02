import React from 'react';
import clsx from 'clsx';
import {
  Box,
  CardHeader,
  Chip,
  Paper,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TablePagination,
  CircularProgress,
} from '@mui/material';

import { useStyles } from './styles';

import IPagination from '../../../@types/pagination';

// Helpers
import stableSort from '../../../helpers/stableSort.helper';
import { getComparator, Order } from '../../../helpers/getComparator.helper';

import EnhancedTableHead from '../EnhancedTableHead copy';

interface IDashboard {
  loading: boolean;
  pagination: IPagination;
  data: Array<any>;
  cellWidth?: number;
  useChip?: string;
  headCells: Array<string>;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number,
  ) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CoordinationDashboard: React.FC<IDashboard> = ({
  pagination,
  data,
  useChip,
  headCells,
  loading,
  cellWidth,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  const classes = useStyles();

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState('number');

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: any,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const emptyRows =
    pagination.limit -
    Math.min(
      pagination.limit,
      pagination.rows - pagination.currentPage * pagination.limit,
    );

  return (
    <Paper className={classes.root}>
      <CardHeader title="Últimas intervenções" />
      <Divider />

      <Box minWidth={800}>
        <Table size="small">
          <EnhancedTableHead
            headCells={headCells}
            headLabels={['Número', 'Título', 'Status', 'Novo']}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          {loading ? (
            <CircularProgress />
          ) : (
            <TableBody>
              {stableSort(data, getComparator(order, orderBy)).map(row => (
                <TableRow hover key={row.number}>
                  {Object.keys(row).map((key, index, array) => {
                    return (
                      <TableCell style={{ width: cellWidth || 'auto' }}>
                        {array[index] === useChip ? (
                          <Chip color="primary" label={row[key]} size="small" />
                        ) : (
                          row[key]
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
              {/* {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          )}
        </Table>
      </Box>

      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={pagination.rows}
        rowsPerPage={pagination.limit}
        page={pagination.currentPage - 1}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage="Linhas por página"
        SelectProps={{
          inputProps: { 'aria-label': 'linhas por página' },
          native: true,
        }}
      />
    </Paper>
  );
};

export default CoordinationDashboard;
