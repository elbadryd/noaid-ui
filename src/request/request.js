import React from 'react';
import sheetConfigs from '../sheetConfigs.json'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tabletop from 'tabletop';

class Request extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        requestRows: [{}],
        requestCols: [],
        offerRows: [{}],
        offerCols: []
        }
        this.showInfo = this.showInfo.bind(this)
    }

   componentDidMount(){
       const sheetId= sheetConfigs['master']
      Tabletop.init( { key: sheetId,
        callback: this.showInfo,
        simpleSheet: false } )
    }

    showInfo(data) {
      console.log(data)
      const { Requests, Offers } = data;
      this.setState({
        requestRows: Requests.elements,
        requestCols: Requests.columnNames,
        offerRows: Offers.elements,
        offerCols: Offers.columnNames
      })

    }

    detectNumberOrUrl(text){
      const urlre = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
      const phonere = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/g
      if (urlre.test(text)){
        return <a href={"//"+text}>{text}</a>
      }
      if (phonere.test(text)){
        return <a href={"tel:"+text}>{text}</a>
      } 
      return text
    }

    render() {

      const { requestRows, requestCols, offerCols, offerRows } = this.state;
      return (
      <div>
        <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              {requestCols.map(col=>(
                <TableCell>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {requestRows.map((row, i) => (
              <TableRow key={row[i]}>
                {requestCols.map((col, i)=>(
                  <TableCell>{this.detectNumberOrUrl(row[col])}</TableCell>
              ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        <TableContainer component={Paper}>
<Table  aria-label="simple table">
  <TableHead>
    <TableRow>
      {offerCols.map(col=>(
        <TableCell>{col}</TableCell>
      ))}
    </TableRow>
  </TableHead>
  <TableBody>
    {offerRows.map((row, i) => (
      <TableRow key={row[i]}>
        {offerCols.map((col, i)=>(
          <TableCell>{this.detectNumberOrUrl(row[col])}</TableCell>
      ))}
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
</div>
      );
  }
}
export default Request