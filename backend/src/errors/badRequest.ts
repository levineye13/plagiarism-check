import { HttpError } from './httpError';

class BadRequest extends HttpError {
  public code: number;

  public constructor(message = 'Некорректный запрос') {
    super(message);
    this.code = 400;
  }
}

export { BadRequest };
