import React from 'react';
import config from '../config.json'
import SheetTable from '../sheetTable/sheettable'
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
       const sheetId= config['sheetUrl']
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

    render() {

      const { requestRows, requestCols, offerCols, offerRows } = this.state;
      return (
      <div>
        <SheetTable cols={requestCols} rows={requestRows}/>
        <SheetTable cols={offerCols} rows={offerRows}/>
</div>
      );
  }
}
export default Request