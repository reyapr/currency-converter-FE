import React from 'react';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import { InputProps, NumberFormatCustomProps } from '../InputAmount/InputInterface';

const NumberFormatCustom = (props: NumberFormatCustomProps) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      getInputRef={inputRef}
      {...other}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
}

const Input = (props: InputProps) => {
  return (
    <div>
      <TextField
        value={props.value}
        onChange={props.handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom as any,
        }}
        variant="outlined"
        placeholder="formatted amount here"
        disabled={props.disabled}
      />
    </div>
  );
}

export default Input