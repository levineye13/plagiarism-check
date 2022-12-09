import { NextFunction, Response } from 'express';
import { Conflict, NotFound, Unauthorized } from '../errors';

import { Group as GroupModel, User as UserModel } from '../models';
import { IGroupRequest } from '../utils/interfaces';

class Group {
  public static getAll = async (
    req: IGroupRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const groups: GroupModel[] = await GroupModel.findAll();

      if (groups.length === 0) {
        res.status(200).json({
          success: true,
          subjects: [],
          text: 'Группы пока что отсутствуют',
        });
      } else {
        res.status(200).json({ success: true, groups });
      }
    } catch (e) {
      next(e);
    }
  };

  public static add = async (
    req: IGroupRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { name } = req.body;

    try {
      const group: GroupModel | null = await GroupModel.findOne({
        where: { name },
      });

      if (group instanceof GroupModel) {
        throw new Conflict();
      }

      const newGroup: GroupModel = await GroupModel.create({ name });

      res.status(201).json({
        success: true,
        id: newGroup.id,
        name: newGroup.name,
      });
    } catch (e) {
      next(e);
    }
  };

  public static addUser = async (
    req: IGroupRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.body;
    const { user } = req;

    try {
      if (!user || !user.id) {
        throw new Unauthorized();
      }

      const userInstance: UserModel | null = await UserModel.findByPk(user.id);
      const groupInstance: GroupModel | null = await GroupModel.findByPk(id);

      if (!userInstance || !groupInstance) {
        throw new NotFound();
      }

      await groupInstance.addUser(userInstance);

      res.status(204).end();
    } catch (e) {
      next(e);
    }
  };
}

export default Group;
