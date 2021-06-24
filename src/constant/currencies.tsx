import Currency from './enums/currency';
import { SelectOption } from '../components/SelectCurrency/SelectInterface';

export const currencies: SelectOption[] = [
  {
    value: Currency.IDR,
    label: Currency.IDR,
  },
  {
    value: Currency.USD,
    label: Currency.USD,
  },
  {
    value: Currency.SGD,
    label: Currency.SGD,
  },
  {
    value: Currency.PHP,
    label: Currency.PHP,
  },
];