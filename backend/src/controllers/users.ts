import { NextFunction, Response } from 'express';
import bcrypt from 'bcryptjs';

import {
  User as UserModel,
  Subject as SubjectModel,
  Group as GroupModel,
  Task as TaskModel,
} from '../models';
import { IRequest } from '../utils/interfaces';
import {
  getPasswordHash,
  generateKeychain,
  getCookieOptions,
} from '../utils/utils';
import { BadRequest, Conflict, NotFound, Unauthorized } from '../errors';
import { Role, Token } from '../utils/constants';

class User {
  public static register = async (
    req: IRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { email, name, password, group, role = Role.User } = req.body;

    const passwordHash = getPasswordHash(password, 10);

    try {
      const user: UserModel | null = await UserModel.findOne({
        where: { email },
      });

      if (user) {
        throw new Conflict();
      }

      const groupInstance: GroupModel | null = await GroupModel.findOne({
        where: { name: group },
      });

      const newUser = await UserModel.create({
        email,
        name,
        password: passwordHash,
        role,
        groupName: group,
      });

      if (groupInstance) {
        await newUser.setGroup(groupInstance);
      }

      const { access, refresh } = generateKeychain(newUser.id, newUser.role);

      res
        .status(201)
        .cookie(Token.Refresh, refresh, getCookieOptions(Token.Refresh))
        .cookie(Token.Access, access, getCookieOptions(Token.Access))
        .json({
          email: newUser.email,
          name: newUser.name,
          group: newUser.group,
        });
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

      //const isCompare = await bcrypt.compare(password, user.password);

      // if (!isCompare) {
      //   throw new Unauthorized();
      // }

      if (password !== user.password) {
        throw new Unauthorized();
      }

      const groupInstance: GroupModel | null = await GroupModel.findOne({
        where: { name: user.groupName },
      });

      if (groupInstance) {
        await user.setGroup(groupInstance);
      }

      const { access, refresh } = generateKeychain(user.id, user.role);

      res
        .status(200)
        .cookie(Token.Refresh, refresh, getCookieOptions(Token.Refresh))
        .cookie(Token.Access, access, getCookieOptions(Token.Access))
        .json({ email: user.email, group: user.group, name: user.name });
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
  ) => {
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

    try {
      if (user === undefined || user.id === undefined) {
        throw new Unauthorized();
      }

      const id = user.id;

      const findUser: UserModel | null = await UserModel.findByPk(id, {
        include: [{ association: 'group' }],
      });

      if (findUser === null) {
        throw new NotFound();
      }

      const group = await GroupModel.findOne({
        where: { name: findUser.groupName },
        include: { association: 'subjects' },
      });

      if (group === null) {
        throw new NotFound();
      }

      res.status(200).json({
        id: findUser.id,
        email: findUser.email,
        name: findUser.name,
        group: {
          id: group.id,
          name: group.name,
          subjects: group.subjects,
        },
      });
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
