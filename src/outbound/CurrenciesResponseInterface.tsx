import Currency from "../constant/enums/currency";

export interface CurrenciesAxiosResponseInterface {
  data: CurrenciesResponseInterface
}

export interface CurrenciesResponseDataInterface {
  data: CurrenciesResponseInterface
}

export interface CurrenciesResponseInterface {
  from: string,
  amount: number,
  timestamp: string,
  to: CurrencyResponseInterface[]
}

export interface CurrencyResponseInterface {
  quotecurrency: string,
  mid: number
}

export interface CurrencyRequestInterface {
  from: Currency,
  to: Currency,
  amount: number
}

export interface RateRequestInterface {
  origin: Currency,
  destination: Currency,
  startDate: number,
  endDate: number
}

export interface ResponseRate {
  originCurrency: Currency,
  destinationCurrency: Currency,
  rate: number,
  createdAt: string
}