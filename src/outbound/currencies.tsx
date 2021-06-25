import axios from 'axios'
import { CurrencyRequestInterface } from './CurrenciesResponseInterface';

const currenciesEndpoint = process.env.REACT_APP_CURRENCIES_ENDPOINT || 'localhost:3000';

export const getCurrencies = (req: CurrencyRequestInterface) => {
  return axios.get(`${currenciesEndpoint}/calculate`, { params: req })
    .then(response => {
      console.log(`[SUCCESS] success to get calculated currency 
        request=${JSON.stringify(req)} response=${JSON.stringify(response)}`)
      return response.data;
    })
    .catch(err => {
      console.log(`[FAILED] to get currency from xe request=${JSON.stringify(req)} err=${err}`)
      throw err;
    })
}

