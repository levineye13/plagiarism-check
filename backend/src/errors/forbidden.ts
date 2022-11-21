import { HttpError } from './httpError';

class Forbidden extends HttpError {
  public code: number;

  public constructor(message = 'Запрещено') {
    super(message);
    this.code = 403;
  }
}

export { Forbidden };
