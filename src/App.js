import React, { Component } from 'react'

import OTP from 'tiny-otp';

import OtpScanner from './OtpScanner/OtpScanner';
import OtpGenerator from './OtpGenerator/OtpGenerator'





class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      secret : null,
      otp : null,
      generator : null,
    }
 
    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
    // this.setOtp = this.setOtp.bind(this);
  }


  handleScan(data){
    console.log(data);
    if (data != null){
      this.setState({
        secret: data,
        generator : new OTP(data),
      })
      console.log(data)
    }
  }

  handleError(err){
    console.error(err)
  }


  // setOtp(){
  //   if (this.generator === none){
  //       this.setState({generator : new OTP(this.secret)})
  //   }
  //   this.setState({otp:this.generator.getTOTP()})

  // }
  render(){

    if (this.state.secret === null){

    return(
      <div>
      <OtpScanner handleScan = {this.handleScan} handleError = {this.handleError}/>
      <p>{this.state.secret}</p>
      </div>
    )}

  else{
    return(
      <div>

      <OtpGenerator generator = {this.state.generator} />
      </div>
    )

  }}
}



export default App;
