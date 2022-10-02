import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

// Componentes
import ToastContainer from '../components/ToastContainer';

export interface IToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  code?: string;
  title: string;
  description?: string;
}

interface IToastContext {
  addToast(message: Omit<IToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<IToastContext>({} as IToastContext);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, code, title, description }: Omit<IToastMessage, 'id'>) => {
      const id = uuid();
      const toast = {
        id,
        type,
        code,
        title,
        description,
      };

      setMessages(lastState => [...lastState, toast]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages(lastState => lastState.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messageStack={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): IToastContext {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
