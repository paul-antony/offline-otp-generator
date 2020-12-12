# offline-otp-generator
A react based app that can generate otp offline based on a shared secret through a QR code. The project is designed to act as a webapp.

The otp is generated using the [Tiny-otp](https://www.npmjs.com/package/tiny-otp) module which generates RFC 6238 compliant time-based one-time passwords (TOTPs).

## preview
To do a live demo visit [offline-otp-generator](http://paul-antony.github.io/offline-otp-generator) using firefox browser. The Qr scanner module works well in firefox browser.

Scan the qr code containing the shared secret. This initiates the otp creator and saves the secret in local storage for future use.

![qrcode scanning](img/qrcode.png)

The otp is generated every 30 seconds. 

![otp generation](img/otp.png)
If you want to reset the secret you can press reset secret button. this will sen u back to the qr code scanning stage.

## Versioning

version 1.0

## Authors

* [**Paul Antony**](https://github.com/paul-antony)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details