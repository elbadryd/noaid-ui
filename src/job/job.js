import React from 'react';
import sheetConfigs from '../sheetConfigs.json'
import Tabletop from 'tabletop';
import SheetTable from '../sheetTable/sheettable'
import axios from 'axios';

class Job extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          rows: [{}],
          cols: [],
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
      const { Jobs } = data;
      this.setState({
        rows: Jobs.elements,
        cols: Jobs.columnNames
      })
    }

    render() {

      const { rows, cols } = this.state
      return (
        <SheetTable rows={rows} cols={cols}/>
      );
  }
}
export default Job