import React from 'react'
import Currency from '../../constant/enums/currency';

export interface SelectProps {
  name: string,
  currency: Currency,
  currencies: SelectOption[],
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface SelectOption {
  value: Currency,
  label: Currency
}