import React from 'react';
import SelectCurrency from '../../../../components/SelectCurrency/index';
import Currency from '../../../../constant/enums/currency';
import Button from '@material-ui/core/Button';
import { currencies } from '../../../../constant/currencies';
import DateAndTimePickers from '../../../../components/DateAndTimePickers';
import { getRates } from '../../../../outbound/currencies';

import './styles.css'
import { Grid } from '@material-ui/core';
import RatesTable from '../RatesTable';
import { ResponseRate } from '../../../../outbound/CurrenciesResponseInterface';
import moment from 'moment';
import { DateAndTimeFormat } from '../../../../constant/date';
import { HistoricalProps } from './HistoralRateInterface';


const getEpochTime = (date: Date) => new Date(date).getTime() / 1000

const constructRateTableRows = (responseRates: ResponseRate)  => ({
  rate: responseRates.rate,
  timestamp: moment(responseRates.createdAt).format(DateAndTimeFormat)
})

const HistoricalRate = (props: HistoricalProps) => {
  const [value, setValue] = React.useState({
    originCurrency: Currency.IDR,
    destinationCurrency: Currency.USD,
  });
  
  const [date, setDate] = React.useState({
    start: new Date(),
    end: new Date()
  })
  
  const [rows, setRows] = React.useState([])
  
  const getCurrencyRates = () => {
    getRates({ 
      origin: value.originCurrency, 
      destination: value.destinationCurrency,
      startDate: getEpochTime(date.start),
      endDate: getEpochTime(date.end)
     })
     .then(response => {
       setRows(response.data.map((responseRate: ResponseRate) => constructRateTableRows(responseRate)))
     })
     .catch(err => {
       if(err.response.status === 400) {
         props.setPopup({
          open: true,
          message: err.response.data.message 
         })
       }
     })
  }
  
  
  const handleChangeDate = (value: Date, name: string) => {
    setDate({
      ...date,
      [name] : value
    })
  }

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
          <div className="historical-rate-right"/>
        </div>
        <div className="historical-rate-content-2">
          <Grid container justify="space-between">
            <div className="historical-rate-desc">Time Range</div>
            <div className="historical-rate-space"/> 
            <div className="historical-rate-date-from">
              <DateAndTimePickers name="start" label="Start Date" value={date.start} handleChange={handleChangeDate}/>
            </div>
            <div className="historical-rate-date-to-text">
              to
            </div>
            <div className="historical-rate-date-to">
              <DateAndTimePickers name="end" label="End Date" value={date.end} handleChange={handleChangeDate}/>
            </div>
          </Grid>
          <Grid>
            <Button variant="outlined" color="primary" onClick={getCurrencyRates}>GET RATES</Button>
          </Grid>
        </div>
        <div className="home-historical-rate-value">
          <RatesTable rows={rows}/>
        </div>
      </div>
    </div>
  )
}

export default HistoricalRate;