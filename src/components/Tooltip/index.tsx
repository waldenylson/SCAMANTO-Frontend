import React from 'react';

// Estilos
import { Container } from './styles';

interface ITooltipProps {
  title: string;
  className?: string;
  toolTipPosition?: 'top' | 'bottom';
}

const Tooltip: React.FC<ITooltipProps> = ({
  title,
  className = '',
  children,
  ...otherProps
}) => {
  return (
    <Container className={className} {...otherProps}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
