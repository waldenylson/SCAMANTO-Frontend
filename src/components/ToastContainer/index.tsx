import React from 'react';
import { useTransition } from 'react-spring';

import { IToastMessage } from '../../hooks/toast.hook';
import { Container } from './styles';

import Toast from './Toast';

interface IToastContainerProps {
  messageStack: IToastMessage[];
}

const Toastcontainer: React.FC<IToastContainerProps> = ({ messageStack }) => {
  const messageStackWithTransition = useTransition(
    messageStack,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );
  return (
    <Container>
      {messageStackWithTransition.map(({ item, key, props }) => (
        <Toast key={key} style={props} messageStack={item} />
      ))}
    </Container>
  );
};

export default Toastcontainer;
