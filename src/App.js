import React, { Component } from 'react'

import OtpScanner from './OtpScanner/OtpScanner';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  handleScan(data){
    console.log(data);
    if (data != null){
      this.setState({
        result: data,
      })
    }
  }

  handleError(err){
    console.error(err)
  }
  render(){

    return(
      <div>
      <OtpScanner handleScan = {this.handleScan} handleError = {this.handleError}/>
      <p>{this.state.result}</p>
      </div>
    )
  }
}



export default App;
