import React, { Component } from 'react'


import './OtpGenerator.css';


class OtpGenerator extends Component{
    constructor(props){
        super(props);
        console.log(props)
        var d = new Date();
        this.state = {
            generator : props.generator,
            otp : props.generator.getTOTP(),
            time: d.getSeconds()%30,
          }
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    tick() {
        var d = new Date();
        var t = d.getSeconds()%30;
        this.setState({
          time: t
        });

        if(t === 0){
            this.setState({otp:this.state.generator.getTOTP()})
        }
      }




    render(){

      let per = 0.5 - (this.state.time /30)*0.5;

      const gauge__a = {transform: `rotate(${per}turn)`};
  

        return(

          <div className = "otp-body">

            <div className="gauge">
              <div className="gauge__body">
                <div className = "gauge__fill" style = {gauge__a}></div>
                <div className="gauge__cover">{30 - this.state.time}</div>
              </div>
            </div>
            <div className ="otp--box">
            <div className = " otn--number">{this.state.otp.slice(0,2)}</div>
            <div className = "otn--number">{this.state.otp.slice(2,4)}</div>
            <div className = "otn--number">{this.state.otp.slice(4)}</div>
            </div>


            <button className = "btn" onClick = {this.props.resetSecret}>Reset Secret</button>

            </div>
        )
    }
}




export default OtpGenerator;