import React from 'react';
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from '@mui/material';
import { Close } from '@material-ui/icons';

import { useStyles } from './styles';

import { IDialogData } from '../index';

const steps = [
  'Solicitado',
  'Coordenado',
  'Autorizado',
  'Aprovado',
  'Iniciado',
  'Concluído',
];

const AppBar: React.FC<IDialogData> = ({ data, dialogHandler }) => {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = React.useState(
    steps.indexOf(data.status) + 1,
  );

  function getCurrentStep() {
    const rejected = data.status === 'Rejeitado';
    const cancelled = data.status === 'Cancelado';
    const coordinating = data.status === 'Em coordenação';

    const failMessage = (rejected || cancelled) && (
      <Typography variant="caption" color="error">
        {data.status}
      </Typography>
    );

    if (rejected || cancelled) {
      return { error: true, message: failMessage, status: data.status };
    }

    return {
      error: false,
      message: '',
      status: coordinating,
    };
  }

  const step = getCurrentStep();

  React.useEffect(() => {
    step.error && setCurrentStep(step.status === 'Cancelado' ? 3 : 4);
  }, [step.error, step.status]);

  return (
    <MuiAppBar className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="fechar-detalhes"
          onClick={dialogHandler}
        >
          <Close />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          N° {data.number}
        </Typography>

        <Stepper activeStep={currentStep} classes={{ root: classes.stepper }}>
          {steps.map(label => {
            const stepLabel = getCurrentStep();

            console.log(stepLabel);

            if (step.status === 'Cancelado' && label === 'Aprovado') {
              return (
                <Step key={label}>
                  <StepLabel
                    error={stepLabel.error}
                    optional={stepLabel.message}
                  >
                    {label}
                  </StepLabel>
                </Step>
              );
            }

            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
