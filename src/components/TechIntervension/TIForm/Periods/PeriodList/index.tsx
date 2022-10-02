import React from 'react';
import { useRecoilState } from 'recoil';
import {
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import { DateRange } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';

import { parsePeriod } from '../../../../../helpers/periodDateParser';

import { TIFormPeriods } from '../../../recoil.atom';

import { useStyles } from './styles';

interface IPeriodInterface {
  id: number;
  date: string;
  time: string;
}

const PeriodList: React.FC = () => {
  const classes = useStyles();

  const [periods, setPeriods] = useRecoilState<Object[]>(TIFormPeriods);

  const parsedPeriods = parsePeriod(periods);

  console.log(parsedPeriods);

  function handleDelButtonClick(index: number) {
    const splicedPeriodsArray = periods.filter((item, _index) => {
      return !(index === _index);
    });

    setPeriods(splicedPeriodsArray);
  }

  // React.useEffect(() => {

  // }, [periods]);

  return (
    <List dense classes={{ root: classes.root }}>
      <Typography variant="subtitle2" classes={{ root: classes.title }}>
        Período(s) da intervenção Selecionados:
      </Typography>
      <Divider />
      {parsedPeriods.map((item: IPeriodInterface, index: number) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar classes={{ root: classes.avatar }}>
              <DateRange />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            key={item.id}
            primary={item.date}
            secondary={item.time}
          />
          <IconButton
            size="medium"
            aria-label="delete"
            onClick={() => handleDelButtonClick(index)}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default PeriodList;
