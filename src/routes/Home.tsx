import React from 'react';
import Select from '../components/Select/index';
import Currencies from '../constant/enums/currencies';

const Home = () => {
  const [currency, setCurrency] = React.useState(Currencies.IDR);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value as Currencies);
  };
  
  return (
    <div>
      <Select currency={currency} handleChange={handleChange} />
    </div>
  )
}

export default Home;