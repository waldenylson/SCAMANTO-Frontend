import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast.hook';

import getValidationErrors from '../../helpers/getValidationErrors.helper';

import SimpleInput from '../FormComponents/SimpleInput';

interface IInterventionFormData {
  teste: string;
}

const TestComponent: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(() => {
    async (formData: IInterventionFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          teste: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(formData, {
          abortEarly: false,
        });
      } catch (errorStack) {
        const { error, code } = errorStack;
        console.log(errorStack);

        if (errorStack instanceof Yup.ValidationError) {
          const errors = getValidationErrors(errorStack);
          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'info',
            title: error.title,
            description: error.detail,
            code,
          });
        }
      }
    };
  }, []);

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <SimpleInput name="Teste" label="Teste" inputWidth={100} />
        <button type="submit">Teste</button>
      </Form>
    </>
  );
};

export default TestComponent;
