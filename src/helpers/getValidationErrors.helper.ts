import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

export default function getValidationErrors(
  errorStack: ValidationError,
): IErrors {
  const validationErrors: IErrors = {};

  errorStack.inner.forEach(error => {
    if (!error.path) {
      throw new Error('getValidationErrors: No error received');
    }
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
