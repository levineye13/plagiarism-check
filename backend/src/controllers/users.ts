import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

import { User as UserModel } from '../models';
import { IController } from '../utils/interfaces';
import { getPasswordHash, generateKeychain } from '../utils/utils';
import { Conflict, NotFound, Unauthorized } from '../errors';
import { Token } from '../utils/constants';

interface IUserController {
  readonly login: (data: IController) => Promise<void>;
  readonly register: (data: IController) => Promise<void>;
  readonly getAll: (data: IController) => Promise<UserModel[] | void>;
  readonly getById: (data: IController) => Promise<UserModel | void>;
  readonly delete: (data: IController) => Promise<void>;
}

class User implements IUserController {
  public register = async (data: IController): Promise<void> => {
    const { email, name, password } = data.req.body;

    const passwordHash = getPasswordHash(password, 10);

    try {
      const user: UserModel | null = await UserModel.findOne({
        where: { email },
      });

      if (user === null) {
        throw new Conflict();
      }

      const newUser = await UserModel.create({
        email,
        name,
        password: passwordHash,
      });

      const { access, refresh } = generateKeychain(newUser.id);

      data.res
        .status(201)
        .json({
          success: true,
          user: {
            email: newUser.email,
            name: newUser.name,
          },
        })
        .cookie(Token.Refresh, refresh, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true,
        })
        .cookie(Token.Access, access, {
          maxAge: 1000 * 60 * 20,
          httpOnly: true,
        });
    } catch (e) {
      console.error(e);
    }
  };

  public login = async (data: IController) => {
    const { email, password } = data.req.body;

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

      const { access, refresh } = generateKeychain(user.id);

      data.res
        .status(204)
        .cookie(Token.Refresh, refresh, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true,
        })
        .cookie(Token.Access, access, {
          maxAge: 1000 * 60 * 20,
          httpOnly: true,
        });
    } catch (e) {
      console.error(e);
    }
  };

  public getAll = async (data: IController): Promise<UserModel[] | void> => {
    try {
      const users: UserModel[] = await UserModel.findAll();

      return users;
    } catch (e) {
      console.error(e);
    }
  };

  public getById = async (data: IController): Promise<UserModel | void> => {
    const { id } = data.req.user;

    if (id === undefined) {
      throw new Error();
    }

    try {
      const user: UserModel | null = await UserModel.findByPk(id);

      if (user === null) {
        throw new Error();
      }

      return user;
    } catch (e) {
      console.error(e);
    }
  };

  public delete = async (data: IController): Promise<void> => {
    const { id } = data.req.user;

    if (id === undefined) {
      throw new Error();
    }

    try {
      const user: UserModel | null = await UserModel.findByPk(id);

      if (user === null) {
        throw new Error();
      }

      await user.destroy();
    } catch (e) {
      console.error(e);
    }
  };
}

export default User;
