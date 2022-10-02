import React from 'react';
import { Container } from '@mui/material';

import Drawer from '../../components/Drawer';
import Header from '../../components/Header';

import CoordinationDashboard from '../../components/Table/DataGrid';
import DashboardBlock from '../../components/Containers/DashboardBlock';

// Serviços
import api from '../../services/api.service';

import IPagination from '../../@types/pagination';
import { useStyles } from './styles';

interface TechnicalIntervention {
  id: string;
  requester: string;
  department: string;
  maintenance: string;
  location: string;
  number: string;
  title: string;
  description: string;
  impact: string;
  status: string;
  created_at: Date;
}

const Dashboard: React.FC = () => {
  const classes = useStyles();

  const [rows, setRows] = React.useState<TechnicalIntervention[]>([]);
  const [pagination, setPagination] = React.useState<IPagination>(
    {} as IPagination,
  );

  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    api
      .get(`/tirs`, {
        params: {
          limit: rowsPerPage,
          pageNumber: page,
        },
      })
      .then(response => {
        setRows(response.data[0]);
        setPagination(response.data[1]);
      });

    setLoading(false);
  }, [page, rowsPerPage]);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <Container className={classes.root} maxWidth={false} disableGutters>
      <Drawer />
      <Container className={classes.contentRoot} maxWidth={false}>
        <Header />
        <Container className={classes.main} maxWidth={false}>
          <DashboardBlock>
            <CoordinationDashboard
              data={rows}
              loading={loading}
              pagination={pagination}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />

            {/* <Card data={data} /> */}
          </DashboardBlock>
        </Container>
      </Container>
    </Container>
  );
};
export default Dashboard;
