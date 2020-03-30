import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { detectNumberOrUrl } from '../helpers'

const SheetTable = (props)=>{
    return (
        <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.cols.map(col=>(
                <TableCell>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row, i) => (
              <TableRow key={row[i]}>
                {props.cols.map((col, i)=>(
                  <TableCell>{col== 'Contact' ?detectNumberOrUrl(row[col]): row[col]}</TableCell>
              ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
    )
}
export default SheetTable