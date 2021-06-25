import React from 'react';
import SelectCurrency from '../../../../components/SelectCurrency/index';
import Currency from '../../../../constant/enums/currency';
import InputAmount from '../../../../components/InputAmount/index';
import Button from '@material-ui/core/Button';
import { currencies } from '../../../../constant/currencies';

import './styles.css'

const Home = () => {
  const [value, setValue] = React.useState({
    originCurrency: Currency.IDR,
    originAmount: '',
    destinationCurrency: Currency.USD,
    destinationAmount: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="currency-converter">
      <div className="title">Currency Converter</div>
      <div className="content">        
        <div className="left">
          <div className="desc">Origin Amount</div>
          <div className="desc">Destination Amount</div>
          <div className="button">
            <Button variant="outlined" color="primary">Calculate</Button>
          </div>
        </div>
        <div className="space"/>
        <div className="mid">
          <SelectCurrency 
            name="originCurrency" 
            currency={value.originCurrency} 
            handleChange={handleChange}
            currencies={currencies.filter(currency => currency.value !== value.destinationCurrency)} 
          />
          <SelectCurrency 
            name="destinationCurrency" 
            currency={value.destinationCurrency} 
            handleChange={handleChange} 
            currencies={currencies.filter(currency => currency.value !== value.originCurrency)}
          />
          <div className="info">
            <span>XE Rate: </span>
            <span className="info-place-holder">rate here</span>
          </div>
        </div>
        <div className="space"/>
        <div className="right">
          <InputAmount 
            name="originAmount" 
            value={value.originAmount} 
            handleChange={handleChange} 
            disabled={!!value.destinationAmount} 
          />
          <InputAmount 
            name="destinationAmount" 
            value={value.destinationAmount} 
            handleChange={handleChange} 
            disabled={!!value.originAmount} 
          />
          <div className="info">
            <span>Fetched On: </span> 
            <span className="info-place-holder">date here</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;