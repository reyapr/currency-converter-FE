import React from 'react';
import SelectCurrency from '../../../../components/SelectCurrency/index';
import Currency from '../../../../constant/enums/currency';
import InputAmount from '../../../../components/InputAmount/index';
import Button from '@material-ui/core/Button';
import { currencies } from '../../../../constant/currencies';
import { DateAndTimeFormat } from '../../../../constant/date'

import './styles.css'
import { getCurrencies } from '../../../../outbound/currencies';
import { CurrencyFormValue } from './CalculateCurrencyInterface';
import { CurrencyRequestInterface } from '../../../../outbound/CurrenciesResponseInterface';
import moment from 'moment';

const formValue: CurrencyFormValue = {
  originCurrency: Currency.IDR,
  originAmount: '',
  originIsDisabled: false,
  destinationCurrency: Currency.USD,
  destinationAmount: '',
  destinationisDisabled: false,
  rate: null,
  fetchedOn: '',
  fetched: false
}

const constructCurrencyRequest = (formValue: CurrencyFormValue): CurrencyRequestInterface => {
  if(formValue.originAmount) {
    return {
      from: formValue.originCurrency,
      to: formValue.destinationCurrency,
      amount: Number(formValue.originAmount)
    }
  }
  
  return {
    from: formValue.destinationCurrency,
    to: formValue.originCurrency,
    amount: Number(formValue.destinationAmount)
  }
}

const Home = () => {
  const [value, setValue] = React.useState(formValue);
  
  const calculate = () => {
    getCurrencies(constructCurrencyRequest(value))
      .then(response => {
        setValue({
          ...value,
          originCurrency: response.data[value.originCurrency].currency,
          originAmount: response.data[value.originCurrency].amount,
          destinationCurrency: response.data[value.destinationCurrency].currency,
          destinationAmount: response.data[value.destinationCurrency].amount,
          rate: response.data.rate.toFixed(11),
          fetchedOn: moment(response.data.fetchTime).format(DateAndTimeFormat),
          fetched: true
        })
      })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(value.fetched) {
      setValue({
        ...value,
        fetched: false
      })
    } else {
      setValue({
        ...value,
        [event.target.name]: event.target.value,
        originIsDisabled: event.target.name === "destinationAmount" && !!event.target.value,
        destinationisDisabled: event.target.name === "originAmount" && !!event.target.value
      });
    }
    
  };
  
  return (
    <div className="currency-converter">
      <div className="title">Currency Converter</div>
      <div className="content">        
        <div className="left">
          <div className="desc">Origin Amount</div>
          <div className="desc">Destination Amount</div>
          <div className="button">
            <Button variant="outlined" color="primary" disabled={!!value.originAmount && !!value.destinationAmount} onClick={calculate}>Calculate</Button>
          </div>
        </div>
        <div className="space"/>
        <div className="mid">
          <SelectCurrency 
            name="originCurrency" 
            currency={value.originCurrency} 
            handleChange={(e) => handleChange(e)}
            currencies={currencies.filter(currency => currency.value !== value.destinationCurrency)} 
          />
          <SelectCurrency 
            name="destinationCurrency" 
            currency={value.destinationCurrency} 
            handleChange={(e) => handleChange(e)} 
            currencies={currencies.filter(currency => currency.value !== value.originCurrency)}
          />
          <div className="info">
            <span>XE Rate: </span>
            <span className="info-place-holder">{value.rate || 'rate here'}</span>
          </div>
        </div>
        <div className="space"/>
        <div className="right">
          <InputAmount 
            name="originAmount" 
            value={value.originAmount} 
            handleChange={handleChange} 
            disabled={value.originIsDisabled} 
          />
          <InputAmount 
            name="destinationAmount" 
            value={value.destinationAmount} 
            handleChange={handleChange} 
            disabled={value.destinationisDisabled} 
          />
          <div className="info">
            <span>Fetched On: </span> 
            <span className="info-place-holder">{value.fetchedOn || 'date here' }</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;