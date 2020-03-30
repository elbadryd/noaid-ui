import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      LAStats: null,
      NOCases: null,
    }
  }
  componentDidMount() {
   axios.get('https://api.covid19api.com/live/country/us/status/confirmed').then(res=>{
     console.log(res)
     if (res.data.length) {
       let laStats = res.data.filter(obj=>{
           return obj.Province.includes('Louisiana')
          }).map(stat=> {
            stat.Date = new Date(stat.Date).getTime();
            return stat;
         })
          .reduce((prev, curr)=> prev.date > curr.date? prev: curr)
          this.setState({LAStats: laStats})
     }
   })
   .catch(err=> console.log({err: err, msg: 'cant get live data'}))

   axios.get('https://api.covid19api.com/country/us/status/confirmed/live').then(res=>{
    console.log(res)
    if (res.data.length) {
      let noStats = res.data.filter(obj=>{
          return obj.Province === ('Louisiana, Orleans')
         })
         .map(stat=> {
           stat.Date = new Date(stat.Date).getTime();
           return stat;
        })
         .reduce((prev, curr)=> prev.date > curr.date? prev: curr)
         this.setState({NOStats: noStats})
    }
  })
  .catch(err=> console.log({err: err, msg: 'cant get live data'}))

  }
  formatDate(num){
    return new Date(this.state.LAStats.Date).toString()
  }
  render(){
    const {LAStats, NOStats} = this.state
    return (
      <div className="App">
        <header className="App-header">
        
        </header>
        COVID-19 Cases in Louisiana: {LAStats? LAStats.Cases : null}
        {/* <br></br>
        Updated at: {LAStats? this.formatDate(LAStats.Date): null} */}
        <br/>
        COVID-19 Cases in New Orleans: {NOStats? NOStats.Cases : null}
        <br></br>
        Updated at: {NOStats? this.formatDate(LAStats.Date): null}
      </div>
    );

  }
}

export default App;
