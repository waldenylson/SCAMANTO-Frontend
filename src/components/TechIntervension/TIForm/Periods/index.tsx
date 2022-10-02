import React from 'react';
import { useRecoilState } from 'recoil';
import 'date-fns';
import { ptBR } from 'date-fns/locale';
import DateFnsUtils from '@date-io/date-fns';

import { Grid, Fab } from '@mui/material';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import AddIcon from '@material-ui/icons/Add';

import PeriodList from './PeriodList';

import { TIFormPeriods } from '../../recoil.atom';

export interface IPeriodArrayFormat {
  [key: string]: any; // eslint-disable-line
}

export default function Period() {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(
    new Date(),
  );

  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(
    new Date(),
  );

  const handleStartDateChange = (date: Date | null) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };

  const [periods, setPeriods] = useRecoilState<Object[]>(TIFormPeriods);

  const handleAddButtonClick = async () => {
    // console.log('teste', selectedDate?.toJSON());
    const period = {
      start_date: selectedStartDate?.toJSON(),
      end_date: selectedEndDate?.toJSON(),
    };
    setPeriods([...periods, period]);
  };

  return (
    <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
      <Grid
        style={
          {
            /* border: '1px solid #2d8b1b' */
          }
        }
        container
      >
        <Grid
          // style={{ border: '1px solid #1da59e', width: 380, marginLeft: 200 }}
          container
          justify="flex-start"
        >
          <Grid
            style={{
              display: 'flex',
              flexDirection: 'column',
              /* border: '1px solid black', */
              margin: 5,
              padding: 3,
            }}
          >
            <Grid
              style={
                {
                  /* border: '1px solid red' */
                }
              }
            >
              <KeyboardDatePicker
                lang="ptBR"
                margin="normal"
                id="start_date_picker"
                name="start_date"
                label="Data Prevista Início"
                cancelLabel="Cancelar"
                format="dd/MM/yyyy"
                value={selectedStartDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                style={{ width: 170 }}
              />
              &nbsp; &nbsp;
              <KeyboardTimePicker
                lang="ptBR"
                margin="normal"
                id="start_time_picker"
                name="start_time_picker"
                ampm={false}
                label="Hora Prevista Início"
                cancelLabel="Cancelar"
                value={selectedStartDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
                style={{ width: 170 }}
              />
            </Grid>
            <Grid
              style={
                {
                  /* border: '1px solid blue' */
                }
              }
            >
              <KeyboardDatePicker
                margin="normal"
                id="end_date_picker"
                name="end_date_picker"
                label="Data Prevista Término"
                cancelLabel="Cancelar"
                format="dd/MM/yyyy"
                value={selectedEndDate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                style={{ width: 170 }}
              />
              &nbsp; &nbsp;&nbsp;
              <KeyboardTimePicker
                lang="pt"
                margin="normal"
                id="end_time_picker"
                name="end_time_picker"
                ampm={false}
                label="Hora Prevista Término"
                cancelLabel="Cancelar"
                value={selectedEndDate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
                style={{ width: 170 }}
              />
            </Grid>
            <Grid
              // style={{ width: 70, border: '1px solid #201c47' }}
              container
              justify="center"
            >
              <Fab
                onClick={handleAddButtonClick}
                color="primary"
                aria-label="add"
                size="small"
                style={{ marginTop: 10 }}
              >
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
          <Grid>
            <PeriodList />
          </Grid>
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
