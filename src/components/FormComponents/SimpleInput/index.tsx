import React from 'react';

import { TextField } from 'unform-material-ui';

import { useStyles } from './style';

interface IInputProps {
  name: string;
  helperText?: string;
  label: string;
  inputWidth: number;
  inputHeigth?: number;
  multiline?: boolean;
  invisible?: boolean;
  rows?: number;
  data?: string;
}

const SimpleInput: React.FC<IInputProps> = ({
  name,
  label,
  inputWidth,
  helperText,
  multiline,
  invisible,
  rows,
  data,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <TextField
      name={name}
      label={label}
      helperText={helperText}
      defaultValue={data}
      rows={rows}
      variant="outlined"
      className={classes.genericInput}
      multiline={multiline}
      style={{
        width: inputWidth,
        display: invisible ? 'none' : '',
      }}
    />
  );
};

export default SimpleInput;
