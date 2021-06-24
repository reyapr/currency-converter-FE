import React from 'react';
import SelectCurrency from '../../../components/SelectCurrency/index';
import Currency from '../../../constant/enums/currency';
import InputAmount from '../../../components/InputAmount/index';
import Button from '@material-ui/core/Button';
import { currencies } from '../../../constant/currencies';

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
    <div className="historical-rate">
      <div className="historical-rate-title">Historical Rate</div>
      <div className="historical-rate-content">
        <div className="historical-rate-content-1">        
          <div className="historical-rate-left">
            <div className="historical-rate-desc">Origin Currency</div>
            <div className="historical-rate-desc">Destination Currency</div>
          </div>
          <div className="historical-rate-space"/>
          <div className="historical-rate-mid">
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
          </div>
          <div className="historical-rate-space"/>
          <div className="historical-rate-right"/>
        </div>
        <div className="historical-rate-content-2">
          <div>
            <div className="historical-rate-desc">Time Range</div>
          </div>
          <div className="historical-rate-button">
            <Button variant="outlined" color="primary">Calculate</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;