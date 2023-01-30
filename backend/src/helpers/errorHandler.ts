//* here we use inheritance concept
export default class ErrorHandler extends Error {
  statusCode: number;
  constructor (message: string, statusCode: number) {
    super(message) // ?👈 super represent the constructor of parent class. here parent class is Error class
    this.statusCode = statusCode // ?👈 this.statusCode = statuscode here this represent class it self and status it self means ErrorHandler class

    Error.captureStackTrace(this, this.constructor)
    // ?----👆 captureStackTrace help us to find the error location of our code
    // ?----------------------👆 this represent of this class (ErrorHandler class)
    // ?----------------------------👆 this.constructor represents the constructor of this class
  }
}
