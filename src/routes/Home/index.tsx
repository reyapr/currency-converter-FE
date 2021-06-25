import React from 'react';
import CalculateCurrency from './components/CalculateCurrency/index';
import HistoricalRate from './components/HistoricalRate/index';
import './styles.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home-calculate-currency">
        <CalculateCurrency/>
      </div>
      <div className="home-historical-rate">
        <HistoricalRate/>
      </div>
    </div>
  )
}

export default Home;