import React from 'react';
import sheetConfigs from '../sheetConfigs.json'
import Tabletop from 'tabletop';
import SheetTable from '../sheetTable/sheettable'

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
       const sheetId= sheetConfigs['master']
      Tabletop.init( { key: sheetId,
        callback: this.showInfo,
        simpleSheet: false } )
    }

    showInfo(data) {
      console.log(data)
      const { Food } = data;
      this.setState({
        rows: Food.elements,
        cols: Food.columnNames
      })

    }

    render() {

      const { rows, cols } = this.state
      return (
        <SheetTable rows={rows} cols={cols}/>
      );
  }
}
export default Food