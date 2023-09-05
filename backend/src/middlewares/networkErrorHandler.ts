import { Response, NextFunction } from 'express';

import { HttpError } from '../errors/httpError';
import { IRequest } from '../utils/interfaces';

const networkErrorHandler = (
  err: Error,
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpError) {
    res.status(err.code).json({ message: err.message, code: err.code });
  } else {
    next(err);
  }
};

export default networkErrorHandler;
