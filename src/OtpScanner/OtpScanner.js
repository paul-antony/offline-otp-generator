import QrReader from 'react-qr-scanner'
 
function OtpScanner(props) {

    return(
      <div>
        <QrReader
          onError={props.handleError}
          onScan={props.handleScan}
          />
      </div>
    )
  }

export default OtpScanner;

