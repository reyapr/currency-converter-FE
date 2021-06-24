import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { DateAndTimePickersProps } from './DateAndTimePickersInterface';

const useStyles = makeStyles({
    textField: {
      width: 250,
    },
});

const DateAndTimePickers = (props: DateAndTimePickersProps) => {
  const classes = useStyles();

  const handleChangeToDate = (data: React.ChangeEvent<HTMLInputElement>) => {
    props.handleChange(new Date(data.target.value), data.target.name)
  }

  return (
    <>
      <TextField
        label={props.label}
        type="datetime-local"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        value={moment(props.value).format('YYYY-MM-DDTHH:mm')}
        onChange={handleChangeToDate}
        variant="outlined"
        name={props.name}
      
      />
    </>
  );
}

export default DateAndTimePickers;
