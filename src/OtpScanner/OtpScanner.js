import QrReader from 'react-qr-scanner'
 
function OtpScanner(params) {

    return(
      <div>
        <QrReader
          onError={params.handleError}
          onScan={params.handleScan}
          />
      </div>
    )
  }

export default OtpScanner;

