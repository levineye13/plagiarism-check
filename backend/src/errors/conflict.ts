import { HttpError } from './httpError';

class Conflict extends HttpError {
  public code: number;

  public constructor(message = 'Конфликт') {
    super(message);
    this.code = 409;
  }
}

export { Conflict };
