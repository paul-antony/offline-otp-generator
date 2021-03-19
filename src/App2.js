import React, { Component } from 'react'

// import OTP from 'tiny-otp';

// import OtpScanner from './OtpScanner/OtpScanner';
// import OtpGenerator from './OtpGenerator/OtpGenerator'

function Nav (props){
    return (
        <nav><h1>Dashboard</h1></nav>
    )
}

function AccountList(props){
    console.log(props.acList)
    const dataList = props.acList.map((name,i) => 
                    <li key={i}>
                    {name}
                  </li>);

    return (<ul>{dataList}</ul>);
}



class App extends Component {
    constructor(props){
        super(props)

        localStorage.removeItem('otp_gen_data');
        let data = localStorage.getItem('otp_gen_data') || null;

        if (data === null){
            data = [{'name': 'temp',"secret": "app&#^*le&sa@denrn@&vf"},
            {'name': 'temp2',"secret": "app&#^*le&sa@denrn@&vf"}]
            localStorage.setItem('otp_gen_data', data);
        }
      

        this.state = {
            'data':data
        }
   
        // this.handleScan = this.handleScan.bind(this);
        // this.handleError = this.handleError.bind(this);
        // this.clearSecret = this.clearSecret.bind(this);
      // this.setOtp = this.setOtp.bind(this);
    }


    render(){
        return (
            <div>
            <Nav/>
            <AccountList acList={this.state.data.map( (x,i) => {return x.name})}/>
            
            </div>
        )
    }



}

export default App;