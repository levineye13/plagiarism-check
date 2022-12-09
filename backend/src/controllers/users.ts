import { NextFunction, Response } from 'express';
import bcrypt from 'bcryptjs';

import {
  User as UserModel,
  Subject as SubjectModel,
  Group as GroupModel,
} from '../models';
import { IRequest } from '../utils/interfaces';
import {
  getPasswordHash,
  generateKeychain,
  getCookieOptions,
} from '../utils/utils';
import { BadRequest, Conflict, NotFound, Unauthorized } from '../errors';
import { Token } from '../utils/constants';

class User {
  public static register = async (
    req: IRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { email, name, password, role } = req.body;

    const passwordHash = getPasswordHash(password, 10);

    try {
      const user: UserModel | null = await UserModel.findOne({
        where: { email },
      });

      if (user instanceof UserModel) {
        throw new Conflict();
      }

      const newUser = await UserModel.create({
        email,
        name,
        password: passwordHash,
        role,
      });

      const { access, refresh } = generateKeychain(newUser.id, newUser.role);

      res
        .status(201)
        .json({
          success: true,
          user: {
            email: newUser.email,
            name: newUser.name,
          },
        })
        .cookie(Token.Refresh, refresh, getCookieOptions(Token.Refresh))
        .cookie(Token.Access, access, getCookieOptions(Token.Access));
    } catch (e) {
      next(e);
    }
  };

  public static login = async (
    req: IRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { email, password } = req.body;

    try {
      const user: UserModel | null = await UserModel.findOne({
        where: { email },
      });

      if (user === null) {
        throw new NotFound();
      }

      const isCompare = await bcrypt.compare(password, user.password);

      if (!isCompare) {
        throw new Unauthorized();
      }

      const { access, refresh } = generateKeychain(user.id, user.role);

      res
        .status(204)
        .cookie(Token.Refresh, refresh, getCookieOptions(Token.Refresh))
        .cookie(Token.Access, access, getCookieOptions(Token.Access));
    } catch (e) {
      next(e);
    }
  };

  public static logout = async (
    req: IRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    res.status(204).clearCookie(Token.Access).clearCookie(Token.Refresh);
  };

  public static getAll = async (
    req: IRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const users: UserModel[] = await UserModel.findAll();

      if (users.length === 0) {
        res.status(200).json({
          success: true,
          users: [],
          text: 'Отсутствуют зарегистрированные пользователи',
        });
      } else {
        res.status(200).json({ success: true, users });
      }
    } catch (e) {
      next(e);
    }
  };

  public static getMe = async (
    req: IRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { user } = req;

    if (user === undefined || user.id === undefined) {
      throw new Unauthorized();
    }

    const id = user.id;

    try {
      const user: UserModel | null = await UserModel.findByPk(id, {
        include: [SubjectModel, GroupModel],
      });

      if (user === null) {
        throw new NotFound();
      }

      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  };

  public static getById = async (
    req: IRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = req.body;

    if (id === undefined) {
      throw new BadRequest();
    }

    try {
      const user: UserModel | null = await UserModel.findByPk(id);

      if (user === null) {
        throw new NotFound();
      }

      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  };

  public static delete = async (
    req: IRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = req.body;

    if (id === undefined) {
      throw new BadRequest();
    }

    try {
      const user: UserModel | null = await UserModel.findByPk(id);

      if (user === null) {
        throw new NotFound();
      }

      await user.destroy();
    } catch (e) {
      next(e);
    }
  };
}

export default User;
