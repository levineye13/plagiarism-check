import { HttpError } from './httpError';

class Unauthorized extends HttpError {
  public code: number;

  public constructor(message = 'Не авторизован') {
    super(message);
    this.code = 401;
  }
}

export { Unauthorized };
