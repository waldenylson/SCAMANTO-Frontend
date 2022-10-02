import React from 'react';

import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  StepIconProps,
  Divider,
} from '@mui/material';

import clsx from 'clsx';

import { DateRange, Info, PictureAsPdf } from '@material-ui/icons';

import MainInfo from './TIForm/MainInfo';
import Period from './TIForm/Periods/index';
import Attachments from './TIForm/Attachments';

import {
  ColorlibConnector,
  useColorlibStepIconStyles,
  useStyles,
} from './styles';

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

const NewTIRSteppers: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    console.log();

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
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Coordenação de Manutenção Cadastrada com Sucesso!
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Fechar
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <br />
              <Divider
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  width: '87%',
                }}
              />
              <br />
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
              >
                {activeStep === steps.length - 1
                  ? 'Finalizar FCM'
                  : 'Próximo Passo'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewTIRSteppers;
