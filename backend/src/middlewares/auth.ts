import { NextFunction, Request, Response } from 'express';

import { IRequest } from '../utils/interfaces';
import { Unauthorized } from '../errors';
import { Token } from '../utils/constants';
import { checkJWTValidity, extractJWTFromCookie } from '../utils/utils';

const auth = (req: IRequest, res: Response, next: NextFunction) => {
  const { cookies } = req;

  const cookieValue: string | undefined = cookies[Token.Access];

  if (cookieValue === undefined) {
    throw new Unauthorized();
  }

  const token = extractJWTFromCookie(cookieValue);

  try {
    const id = Number(checkJWTValidity(token));

    if (req.user === undefined) {
      req.user = {};
    }

    req.user.id = id;
    next();
  } catch (e) {
    next(new Unauthorized());
  }
};

export default auth;
