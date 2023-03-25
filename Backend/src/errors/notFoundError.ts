import { CustomError } from './customError';

export class NotFoundError extends CustomError {
  statusCode: number = 404;

  constructor(message: string = 'Route Not Found') {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors(): { message: string }[] {
    return [{ message: this.message }];
  }
}
