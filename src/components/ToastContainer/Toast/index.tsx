import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';

import { Container } from './styles';
import { IToastMessage, useToast } from '../../../hooks/toast.hook';

interface IToastProps {
  messageStack: IToastMessage;
  style: object;
}

const Toast: React.FC<IToastProps> = ({ messageStack, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(messageStack.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, messageStack.id]);

  const icons = {
    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    success: <FiCheckCircle size={24} />,
  };

  return (
    <Container
      type={messageStack.type}
      style={style}
      hasDescription={!!messageStack.description}
    >
      {icons[messageStack.type || 'info']}

      <div>
        <strong>{messageStack.title}</strong>
        {messageStack.description && <p>{messageStack.description}</p>}
        {messageStack.code && (
          <>
            <hr />
            <p>{messageStack.code}</p>
          </>
        )}
      </div>

      <button type="button" onClick={() => removeToast(messageStack.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
