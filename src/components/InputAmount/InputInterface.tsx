import NumberFormat from 'react-number-format';

export interface InputProps {
  name: string,
  disabled: boolean,
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}