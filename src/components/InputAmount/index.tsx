import React from 'react';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import { InputProps, NumberFormatCustomProps } from './InputInterface';
import { makeStyles } from '@material-ui/core/styles'

const NumberFormatCustom = (props: NumberFormatCustomProps) => {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
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
    <>
      <TextField
        value={props.value}
        onChange={props.handleChange}
        name={props.name}
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom as any,
        }}
        variant="outlined"
        placeholder="formatted amount here"
      />
    </>
  );
}

export default Input