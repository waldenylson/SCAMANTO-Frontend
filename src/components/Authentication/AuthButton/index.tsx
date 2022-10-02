import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const AuthButton: React.FC<ButtonProps> = ({ children, ...otherProps }) => (
  <Container type="button" {...otherProps}>
    {children}
  </Container>
);

export default AuthButton;
