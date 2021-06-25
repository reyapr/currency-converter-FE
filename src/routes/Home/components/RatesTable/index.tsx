import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { RatesTableProps } from './RatesTableInterface';
import moment from 'moment';
import { DateAndTimeFormat } from '../../../../constant/date';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const getFormattedDate = (date: Date) => moment(date).format(DateAndTimeFormat)

const RatesTable = (props: RatesTableProps) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell align="left">Calories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => {
            const formattedDate = getFormattedDate(row.timestamp);
            return (
              <TableRow key={formattedDate}>
                <TableCell component="th" scope="row">
                  {formattedDate}
                </TableCell>
                <TableCell align="left">{row.rate}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RatesTable;
