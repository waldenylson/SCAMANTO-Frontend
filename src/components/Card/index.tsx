import React from 'react';

import {
  Card,
  CardContent,
  Typography,
  Divider,
  LinearProgress,
  Grid,
} from '@mui/material';

import clsx from 'clsx';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Slide from '@mui/material/Slide';

import { TransitionProps } from '@mui/material/transitions';
import { useStyles } from './styles';

import Dialog from './Dialog';

export interface IMainCardData {
  [key: string]: any;
}

export interface IMainCard {
  data: IMainCardData[];
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const MainCard: React.FC<IMainCard> = ({ data }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [cardData, setCardData] = React.useState([{} as IMainCardData]);
  const [cardDetails, setCardDetails] = React.useState({} as IMainCardData);

  function parsePeriod(periods: Array<any>): any {
    const parsedPeriods = periods.map(period => {
      const startDate = format(new Date(period.start_date), 'dd/MM/uuuu');
      const endDate = format(new Date(period.end_date), 'dd/MM/uuuu');

      const startTime = format(new Date(period.start_date), 'HHmm');
      const endTime = format(new Date(period.end_date), 'HHmm');

      if (startDate === endDate) {
        return {
          id: period.id,
          date: startDate,
          time: `${startTime}Z às ${endTime}Z`,
        };
      }

      return {
        id: period.id,
        date: `${startDate} a ${endDate}`,
        time: `${startTime}Z às ${endTime}Z`,
      };
    });

    return parsedPeriods;
  }

  React.useEffect(() => {
    const parsedData = data.map(item => ({
      ...item,
      since: formatDistanceToNow(new Date(item.updated_at), {
        locale: ptBR,
      }),
      parsed_periods: parsePeriod(item.period),
    }));

    setCardData(parsedData);
  }, [data]);

  const handleClickOpen = React.useCallback(
    (details: IMainCardData) => () => {
      setOpen(true);
      setCardDetails(details);
    },
    [],
  );

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const dialogHandler = React.useCallback(() => {
    handleClose();
  }, [handleClose]);

  return (
    <Grid container alignContent="flex-start" justifyContent="flex-start">
      {cardData.map(item => (
        <Card
          key={item.number}
          classes={{
            root: clsx(classes.root, {
              [classes.rootApproved]: item.status === 'Aprovado',
              [classes.rootRejected]: item.status === 'Rejeitado',
              [classes.rootCancelled]: item.status === 'Cancelado',
              [classes.rootAuthorized]: item.status === 'Autorizado',
              [classes.rootCoordinating]: item.status === 'Em coordenação',
            }),
          }}
          elevation={3}
        >
          <CardContent>
            <div className={classes.cardHeader}>
              <Typography
                classes={{ root: classes.headerNumber }}
                color="textSecondary"
                gutterBottom
                onClick={handleClickOpen(item)}
              >
                Nº &nbsp;&nbsp;{item.number}
              </Typography>

              <Typography
                className={clsx(classes.status, {
                  [classes.statusApproved]: item.status === 'Aprovado',
                  [classes.statusRejected]: item.status === 'Rejeitado',
                  [classes.statusCancelled]: item.status === 'Cancelado',
                  [classes.statusAuthorized]: item.status === 'Autorizado',
                  [classes.statusCoordinating]:
                    item.status === 'Em coordenação',
                })}
                color="textSecondary"
                gutterBottom
              >
                {item.status}
              </Typography>
            </div>

            <div className={classes.cardContent}>
              <span>{item.title}</span>
              <p>{item.description}</p>
            </div>

            <Divider className={classes.divider} />

            <div className={classes.cardFooter}>
              <Typography gutterBottom>{item.maintenance_type}</Typography>
              {item.status === 'Aprovado' && (
                <Typography color="textSecondary" gutterBottom>
                  {item.progressStatus}
                </Typography>
              )}
            </div>
            {item.status === 'Aprovado' && (
              <LinearProgress
                className={classes.progressBar}
                variant="determinate"
                value={item.progress}
              />
            )}
          </CardContent>
        </Card>
      ))}

      {/* Abaixo retorna o modal com os detalhes dos cards */}
      <Dialog
        fullScreen
        TransitionComponent={Transition}
        transitionDuration={{ enter: 600, exit: 300 }}
        open={open}
        dialogHandler={dialogHandler}
        data={cardDetails}
      />
    </Grid>
  );
};

export default MainCard;
