import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles'
import { SelectProps } from './SelectInterface';

const useStyles = makeStyles({
  select: {
    textAlign: 'left'
  }
});

const Select = (props: SelectProps) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        id="select-currency"
        select
        value={props.currency}
        onChange={props.handleChange}
        variant="outlined"
        className={classes.select}
        name={props.name}
      >
        {props.currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}

export default Select;