import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import './OtpGenerator.css';

import { Grid } from '@material-ui/core';


const classes = {
  paper: {
    height: 1000,
    width: 100
  }}


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

        return(
          <Paper elevation={3}>
          <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center">

            <h1>{this.state.time}</h1>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">

            <Paper elevation={3} ><h1>{this.state.otp.slice(0,2)}</h1></Paper>
            <Paper elevation={3} ><h1>{this.state.otp.slice(2,4)}</h1></Paper>
            <Paper elevation={3} ><h1>{this.state.otp.slice(4)}</h1></Paper>
            </Grid>
            <Button variant="contained" color="primary"onClick = {this.props.resetSecret}>Reset Secret</Button>

            </Grid>
            </Paper>
        )
    }
}




export default OtpGenerator;