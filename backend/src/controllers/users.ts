import bcrypt from 'bcryptjs';

import {
  User as UserModel,
  Subject as SubjectModel,
  Group as GroupModel,
} from '../models';
import { IController } from '../utils/interfaces';
import {
  getPasswordHash,
  generateKeychain,
  getCookieOptions,
} from '../utils/utils';
import { BadRequest, Conflict, NotFound, Unauthorized } from '../errors';
import { Token } from '../utils/constants';

class User {
  public static register = async (data: IController): Promise<void> => {
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
        .cookie(Token.Refresh, refresh, getCookieOptions(Token.Refresh))
        .cookie(Token.Access, access, getCookieOptions(Token.Access));
    } catch (e) {
      console.error(e);
    }
  };

  public static login = async (data: IController): Promise<void> => {
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
        .cookie(Token.Refresh, refresh, getCookieOptions(Token.Refresh))
        .cookie(Token.Access, access, getCookieOptions(Token.Access));
    } catch (e) {
      console.error(e);
    }
  };

  public static getAll = async (data: IController): Promise<void> => {
    try {
      const users: UserModel[] = await UserModel.findAll();

      if (users.length === 0) {
        data.res.status(200).json({
          success: true,
          users: [],
          text: 'Отсутствуют зарегистрированные пользователи',
        });
      } else {
        data.res.status(200).json({ success: true, users });
      }
    } catch (e) {
      console.error(e);
    }
  };

  public static getMe = async (data: IController): Promise<void> => {
    const { user } = data.req;

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
      user;
      data.res.status(200).json(user);
    } catch (e) {
      console.error(e);
    }
  };

  public static getById = async (data: IController): Promise<void> => {
    const { id } = data.req.body;

    if (id === undefined) {
      throw new BadRequest();
    }

    try {
      const user: UserModel | null = await UserModel.findByPk(id);

      if (user === null) {
        throw new NotFound();
      }

      data.res.status(200).json(user);
    } catch (e) {
      console.error(e);
    }
  };

  public static delete = async (data: IController): Promise<void> => {
    const { id } = data.req.body;

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
      console.error(e);
    }
  };
}

export default User;
