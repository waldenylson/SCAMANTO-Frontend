import React, { createContext, useCallback, useState, useContext } from 'react';
import { isExpired } from 'react-jwt';

// Serviços
import api from '../services/api.service';

interface ISignInCredentials {
  user: string;
  password: string;
}

interface IAuthState {
  last_session: object;
  authorization: string;
}

interface IAuthContext {
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
  last_session: object;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const token = localStorage.getItem('@SCAMANTO:authorization');
  const logoutFlag = isExpired(token as string);

  const [authData, setAuthData] = useState<IAuthState>(() => {
    const last_session = localStorage.getItem('@SCAMANTO:lastSession');
    const authorization = localStorage.getItem('@SCAMANTO:authorization');

    if (authorization && logoutFlag) {
      localStorage.removeItem('@SCAMANTO:lastSession');
      localStorage.removeItem('@SCAMANTO:authorization');
    }

    if (last_session && authorization) {
      api.defaults.headers.authorization = `Bearer ${authorization}`;

      return { last_session: JSON.parse(last_session), authorization };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ user, password }) => {
    await api
      .post('users/authentication', {
        user,
        password,
      })
      .then(response => {
        const { last_session, authorization } = response.data;

        localStorage.setItem(
          '@SCAMANTO:lastSession',
          JSON.stringify(last_session),
        );
        localStorage.setItem('@SCAMANTO:authorization', authorization);

        // api.defaults.headers.authorization = `Bearer ${authorization}`;

        setAuthData({ last_session, authorization });
      })
      .catch(error => {
        throw error.response.data;
      });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@SCAMANTO:lastSession');
    localStorage.removeItem('@SCAMANTO:authorization');

    setAuthData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ last_session: authData.last_session, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
