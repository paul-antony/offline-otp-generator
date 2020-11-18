import React, { Component } from 'react'

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
        return(<div>
            <h1>{this.state.time}</h1>
            <h1>{this.state.otp}</h1>
            </div>
        )
    }
}




export default OtpGenerator;