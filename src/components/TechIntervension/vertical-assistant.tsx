import React from 'react';

import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
  StepIconProps,
  Divider,
} from '@mui/material';

import { DateRange, Info, PictureAsPdf } from '@material-ui/icons';

import clsx from 'clsx';

import { useRecoilState } from 'recoil';

import MainInfo from './TIForm/MainInfo';
import Period from './TIForm/Periods/index';
import Attachments from './TIForm/Attachments';

import { TIFormActiveStep } from './recoil.atom';

import { useColorlibStepIconStyles, useStyles } from './styles';

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed, icon } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <Info />,
    2: <DateRange />,
    3: <PictureAsPdf />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(icon)]}
    </div>
  );
}

function getSteps() {
  return [
    'Dados da Intervensão',
    'Período(s) Previsto(s)',
    'Anexos Relevantes (PDF)',
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <MainInfo />;
    case 1:
      return <Period />;
    case 2:
      return <Attachments />;
    default:
      return 'Unknown step';
  }
}

const VerticalLinearStepper: React.FC = () => {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);
  const [activeStep, setActiveStep] = useRecoilState(TIFormActiveStep);

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <br />
                <Divider
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    width: '87%',
                  }}
                />
                <br />
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Voltar
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    type="submit"
                    form="TIFormMainInfo"
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default VerticalLinearStepper;
