import { Response, NextFunction } from 'express';
import { BaseError, ValidationError } from 'sequelize';

import { IRequest } from '../utils/interfaces';

const errorHandler = (
  err: Error,
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  res.status(500).json(err);
};

export default errorHandler;
