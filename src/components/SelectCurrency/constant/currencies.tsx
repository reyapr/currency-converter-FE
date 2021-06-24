import Currency from '../../../constant/enums/currencies';
import { SelectOption } from '../SelectInterface';

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