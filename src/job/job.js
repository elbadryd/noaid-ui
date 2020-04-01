import React from 'react';
import config from '../config.json'
import Tabletop from 'tabletop';
import SheetTable from '../sheetTable/sheettable';
import axios from 'axios';
import './jobs.css'

class Job extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          rows: [{}],
          cols: [],
          workNolaJobs: null,
        }
        this.showInfo = this.showInfo.bind(this)
    }

   componentDidMount(){
       const sheetId= config['sheetUrl']
      Tabletop.init( { key: sheetId,
        callback: this.showInfo,
        simpleSheet: false } )
        axios.get(config['azureUrl'] + '/scrapetrigger')
            .then(res=>this.setState({workNolaJobs: res.data}))
            .catch(err=>console.log(err))
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

      const { rows, cols, workNolaJobs } = this.state
      return (
          <div>
            <SheetTable rows={rows} cols={cols}/>
            <div className="workNolaJobs" dangerouslySetInnerHTML={{ __html: workNolaJobs }} />
        </div>
      );
  }
}
export default Job