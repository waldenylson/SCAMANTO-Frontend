import clsx from 'clsx';
import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

import { useStyles } from './styles';

interface IStatusBox {
  status: string;
  since: string;
}

const StatusBox: React.FC<IStatusBox> = ({ status, since }) => {
  const classes = useStyles();

  const styled = {
    approved: status === 'Aprovado',
    rejected: status === 'Rejeitado',
    cancelled: status === 'Cancelado',
    authorized: status === 'Autorizado',
    coordinating: status === 'Em coordenação',
  };

  return (
    <Alert
      classes={{
        root: clsx(classes.root, {
          [classes.rootApproved]: styled.approved,
          [classes.rootRejected]: styled.rejected,
          [classes.rootCancelled]: styled.cancelled,
          [classes.rootAuthorized]: styled.authorized,
          [classes.rootCoordinating]: styled.coordinating,
        }),
      }}
      icon={false}
    >
      <AlertTitle>{status}</AlertTitle>
      (há {since})
    </Alert>
  );
};

export default StatusBox;
