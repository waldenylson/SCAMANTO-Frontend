import React from 'react';

import { AuthProvider } from './authentication.hook';
import { ToastProvider } from './toast.hook';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;
