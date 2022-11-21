import { HttpError } from './httpError';

class InternalServerError extends HttpError {
  public code: number;

  public constructor(message = 'Внутренняя ошибка сервера') {
    super(message);
    this.code = 500;
  }
}

export { InternalServerError };
