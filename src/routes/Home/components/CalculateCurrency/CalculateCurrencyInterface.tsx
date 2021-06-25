import Currency from "../../../../constant/enums/currency";

export interface CurrencyFormValue {
  originCurrency: Currency,
  originAmount: string,
  destinationCurrency: Currency,
  destinationAmount: string,
  rate: number | null,
  fetchedOn: string,
  originFilledByFetch: boolean,
  destinationFilledByFetch: boolean
}
