import React from 'react'
import Currencies from '../../constant/enums/currencies';

export interface SelectProps {
  currency: Currencies,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface SelectOption {
  value: Currencies,
  label: Currencies
}