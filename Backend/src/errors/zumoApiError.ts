import { CustomError } from './customError';

export class ZumoApiError extends CustomError {
  statusCode: number = 500;

  constructor(message: string = 'Something went wrong with zumo API') {
    super(message);
    Object.setPrototypeOf(this, ZumoApiError.prototype);
  }
  serializeErrors(): { message: string }[] {
    return [{ message: this.message }];
  }
}
