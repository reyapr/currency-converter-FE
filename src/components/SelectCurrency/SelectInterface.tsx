import React from 'react'
import Currency from '../../constant/enums/currencies';

export interface SelectProps {
  name: string,
  currency: Currency,
  currencies: Currency
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface SelectOption {
  value: Currency,
  label: Currency
}