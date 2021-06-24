import React from 'react';
import SelectCurrency from '../../../components/SelectCurrency/index';
import Currencies from '../../../constant/enums/currencies';
import InputAmount from '../../../components/InputAmount/index';
import './styles.css'

const Home = () => {
  const [value, setValue] = React.useState({
    originCurrency: Currencies.IDR,
    originAmount: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name)
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <div className="origin">
        <SelectCurrency name="originCurrency" currency={value.originCurrency} handleChange={handleChange} />
        <InputAmount name="originAmount" value={value.originAmount} handleChange={handleChange} disabled={true} />
      </div>
    </div>
  )
}

export default Home;