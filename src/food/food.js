import React from 'react';
import axios from 'axios';
import sheetConfigs from '../sheetConfigs.json'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tabletop from 'tabletop';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [

// ];

// const classes = useStyles();
class Food extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          rows: [{}],
          cols: [],
        }
        this.showInfo = this.showInfo.bind(this)
    }

   componentDidMount(){
       const sheetId= sheetConfigs['food']
       const sheeturl = `https://spreadsheets.google.com/feeds/cells/${sheetId}/1/public/values?alt=json`
      Tabletop.init( { key: sheetId,
        callback: this.showInfo,
        simpleSheet: false } )
      // axios.get(sheeturl)
      // .then(res=> {
      //   console.log(res)
      //   let headers = res.data.feed.entry.filter(cell=>cell.gs$cell.row === '1').map(obj=>obj.gs$cell.$t)
      //   console.log(headers)
      //   this.setState({doc:res})
      // })
      // .catch(err=>console.log(err));
      // console.log(rows)


    }

    showInfo(data, tabletop) {
      console.log(data)
      const { Sheet1 } = data;
      this.setState({
        rows: Sheet1.elements,
        cols: Sheet1.columnNames
      })
      // do something with the data
      // console.log(JSON.stringify(data, null, 2))
    }

    useStyles = makeStyles({
      table: {
        minWidth: 650,
      },
    });

    render() {
      //  const classes = this.useStyles();

      const { rows, cols } = this.state
      return (
        
        <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              {cols.map(col=>(
                <TableCell>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={row[i]}>
                {cols.map((col, i)=>(
                  <TableCell>{row[col]}</TableCell>
              ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      );
  }
}
export default Food