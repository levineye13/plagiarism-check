import { Response, NextFunction } from 'express';

import { Forbidden, Unauthorized } from '../errors';
import { HttpError } from '../errors/httpError';
import { Token } from '../utils/constants';
import { IRequest } from '../utils/interfaces';
import { TRole } from '../utils/types';
import { checkJWTValidity, extractJWTFromCookie } from '../utils/utils';

const role =
  (roles: TRole[]) => (req: IRequest, res: Response, next: NextFunction) => {
    const { cookies } = req;

    const cookieValue: string | undefined = cookies[Token.Access];

    if (cookieValue === undefined) {
      throw new Unauthorized();
    }

    const token = extractJWTFromCookie(cookieValue);

    try {
      const payload = checkJWTValidity(token);

      const isRole = roles.some((role) => role === payload.role);

      if (!isRole) {
        throw new Forbidden();
      }

      next();
    } catch (e) {
      if (e instanceof HttpError) {
        next(e);
      } else {
        next(new Unauthorized());
      }
    }
  };

export default role;
