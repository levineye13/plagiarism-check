import { Response, NextFunction } from 'express';
import { BaseError, ValidationError } from 'sequelize';

import { IRequest } from '../utils/interfaces';

const sequelizeErrorHandler = (
  err: Error,
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BaseError) {
    if (err instanceof ValidationError) {
      res.status(400).json(err.errors);
    }

    //res.status(err.code).json({ message: err.message, code: err.code });
  } else {
    next(err);
  }
};

export default sequelizeErrorHandler;
