import React from 'react';
import { Select } from 'unform-material-ui';
import MenuItem from '@mui/material/MenuItem';

import { useRecoilState } from 'recoil';

import { handleUFChange } from './recoil.atom';

import { useStyles } from './styles';

interface ISelectProps {
  selectName: string;
  label: string;
  data?: string | null;
  objectOptions: Record<string, any>[];
  disabled?: boolean;
  selectWidth: number;
}

const SelectInput: React.FC<ISelectProps> = ({
  selectName,
  label,
  selectWidth,
  data,
  objectOptions,
  disabled,
  ...otherProps
}) => {
  const classes = useStyles();
  const [selectValue, setSelectValue] = React.useState('');
  const [, setUF] = useRecoilState(handleUFChange);

  const handleChange = (
    event: React.ChangeEvent<{ value: unknown; name?: unknown }>,
  ) => {
    setSelectValue(event.target.value as string);

    const { value, name } = event.target;

    if (name === 'state_id') {
      setUF(value as string);
    }
  };

  React.useEffect(() => {
    if (data) setSelectValue(data as string);
  }, [data]);

  return (
    <div>
      <Select
        name={selectName}
        label={label}
        value={selectValue}
        variant="outlined"
        onChange={handleChange}
        className={classes.select}
        disabled={disabled}
        style={{
          width: selectWidth,
          margin: 8,
        }}
      >
        {objectOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectInput;
