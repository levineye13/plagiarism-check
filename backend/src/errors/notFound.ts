import { HttpError } from './httpError';

class NotFound extends HttpError {
  public code: number;

  public constructor(message = 'Не найдено') {
    super(message);
    this.code = 404;
  }
}

export { NotFound };
