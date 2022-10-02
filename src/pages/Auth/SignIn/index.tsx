import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiUser, FiLock } from 'react-icons/fi';

// Utilitários
import getValidationErrors from '../../../helpers/getValidationErrors.helper';

// Estilos
import { Container, Content } from './styles';

// Logotipo
import logoImage from '../../../assets/images/logo.png';

// Componentes
import AuthInput from '../../../components/Authentication/AuthInput';
import AuthButton from '../../../components/Authentication/AuthButton';

import { useToast } from '../../../hooks/toast.hook';
import { useAuth } from '../../../hooks/authentication.hook';

interface ISignInFormData {
  user: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (authData: ISignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          user: Yup.string().required('Informe seu nome ou e-mail'),
          password: Yup.string().required('Informe sua senha'),
        });

        await schema.validate(authData, {
          abortEarly: false,
        });

        await signIn({
          user: authData.user,
          password: authData.password,
        });
      } catch (errorStack) {
        const { error, code } = errorStack;

        if (errorStack instanceof Yup.ValidationError) {
          const errors = getValidationErrors(errorStack);
          formRef.current?.setErrors(errors);
        } else {
          try {
            addToast({
              type: 'info',
              title: error.title,
              description: error.detail,
              code,
            });
          } catch (_error) {
            addToast({
              type: 'error',
              title: 'Erro de Conexão!',
              description: 'Não foi possível acessar o servidor.',
              code: 'API Server Connection Error',
            });
          }
        }
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <img src={logoImage} alt="CINDACTA III" height="240" width="225" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Acesso</h1>

          <AuthInput name="user" icon={FiUser} placeholder="Usuário" />
          <AuthInput
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <AuthButton type="submit">Entrar</AuthButton>

          <a href="forgot">Esqueci minha senha</a>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
