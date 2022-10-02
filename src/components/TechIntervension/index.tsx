import React from 'react';

import NewTIRSteppers from './assistant';
import VerticalLinearStepper from './vertical-assistant';

import { Container } from './styles';

const TI: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        {/* <NewTIRSteppers>{children}</NewTIRSteppers> */}
        <VerticalLinearStepper>{children}</VerticalLinearStepper>
      </Container>
    </>
  );
};

export default TI;
