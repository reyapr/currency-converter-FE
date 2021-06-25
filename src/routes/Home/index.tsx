import React, { useState } from 'react';
import CalculateCurrency from './components/CalculateCurrency/index';
import HistoricalRate from './components/HistoricalRate/index';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import './styles.css'
import { Popup } from './HomeInterface';

const Home = () => {
  const [popup, setPopup] = useState<Popup>({
    open: false,
    message: ''
  })
  
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setPopup({
      open: false,
      message: ''
    });
  };
  return (
    <div className="home">
      <div className="home-calculate-currency">
        <CalculateCurrency/>
      </div>
      <div className="home-historical-rate">
        <HistoricalRate setPopup={setPopup}/>
      </div>
      <Snackbar open={popup.open} autoHideDuration={3000} onClose={handleClose}>
        <Alert  severity="error">
          {popup.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Home;