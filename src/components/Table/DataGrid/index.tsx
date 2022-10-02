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
  Card,
  CardContent,
} from '@mui/material';

import { useStyles } from './styles';

import IPagination from '../../../@types/pagination';

// Helpers
import stableSort from '../../../helpers/stableSort.helper';
import { getComparator, Order } from '../../../helpers/getComparator.helper';

import EnhancedTableHead from '../EnhancedTableHead';

interface IDashboard {
  loading: boolean;
  pagination: IPagination;
  data: Array<any>;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number,
  ) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CoordinationDashboard: React.FC<IDashboard> = ({
  pagination,
  data,
  loading,
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
      <CardHeader
        classes={{ root: classes.cardHeader }}
        title="Últimas intervenções"
      />
      <CardContent className={classes.cardContent}>
        <Box minWidth={800}>
          <Table size="small" className={classes.table}>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            {loading ? (
              <CircularProgress />
            ) : (
              <TableBody>
                {stableSort(data, getComparator(order, orderBy)).map(row => (
                  <TableRow className="table-row" hover key={row.number}>
                    <TableCell className={classes.tableCell}>
                      {row.number}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      <Chip
                        color="primary"
                        label={row.maintenance}
                        size="small"
                        className={clsx(classes.chipRoot, {
                          [classes.preventive]:
                            row.maintenance === 'Preventiva',
                          [classes.corrective]: row.maintenance === 'Corretiva',
                          [classes.update]: row.maintenance === 'Atualização',
                        })}
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {row.title}
                      <br />
                      <strong>{row.location}</strong>
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      <Chip
                        color="primary"
                        label={row.status}
                        size="small"
                        className={clsx(classes.chipRoot, {
                          [classes.approved]: row.status === 'Aprovada',
                          [classes.canceled]: row.status === 'Cancelada',
                          [classes.rejected]: row.status === 'Rejeitada',
                          [classes.requested]: row.status === 'Solicitada',
                          [classes.authorized]: row.status === 'Autorizada',
                          [classes.coordinating]:
                            row.status === 'Em coordenação',
                        })}
                      />
                    </TableCell>
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
      </CardContent>

      <TablePagination
        className={classes.cardFooter}
        rowsPerPageOptions={[5]}
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
