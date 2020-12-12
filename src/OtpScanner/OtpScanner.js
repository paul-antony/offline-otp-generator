import QrReader from 'react-qr-scanner'
 
function OtpScanner(props) {


  const previewStyle = {
    height: 652,
    width: 480,
  }

    return(
      <div>
        <QrReader
          delay = {50}
          onError={props.handleError}
          onScan={props.handleScan}
          style={previewStyle}
          />
      </div>
    )
  }

export default OtpScanner;

