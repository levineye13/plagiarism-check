import { NextFunction, Response } from 'express';
import { BadRequest, Conflict, NotFound, Unauthorized } from '../errors';

import {
  Group as GroupModel,
  Subject as SubjectModel,
  User as UserModel,
} from '../models';
import { IGroupRequest } from '../utils/interfaces';

class Group {
  public static getAll = async (
    req: IGroupRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const groups: GroupModel[] = await GroupModel.findAll({
        include: [{ model: UserModel }, { model: SubjectModel }],
      });

      if (groups.length === 0) {
        res.status(200).json({
          success: true,
          groups: [],
          text: 'Группы пока что отсутствуют',
        });
      } else {
        res.status(200).json({ success: true, groups });
      }
    } catch (e) {
      next(e);
    }
  };

  public static create = async (
    req: IGroupRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { user } = req;
    const { name } = req.body;

    try {
      if (user === undefined || user.id === undefined) {
        throw new Unauthorized();
      }

      const group: GroupModel | null = await GroupModel.findOne({
        where: { name },
      });

      if (group instanceof GroupModel) {
        throw new Conflict();
      }

      const newGroup: GroupModel = await GroupModel.create({
        name,
        creatorId: user.id,
      });

      res.status(201).json({
        id: newGroup.id,
        name: newGroup.name,
      });
    } catch (e) {
      next(e);
    }
  };

  public static delete = async (
    req: IGroupRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.body;

    if (id === undefined) {
      throw new BadRequest();
    }

    try {
      const group: GroupModel | null = await GroupModel.findByPk(id);

      if (group === null) {
        throw new NotFound();
      }

      await group.destroy();

      res.status(200).json({ success: true });
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

  // public static addCourse = async (
  //   req: IGroupRequest,
  //   res: Response,
  //   next: NextFunction
  // ) => {
  //   const { id } = req.body;

  //   try {
  //     const userInstance: UserModel | null = await UserModel.findByPk(user.id);
  //     const groupInstance: GroupModel | null = await GroupModel.findByPk(id);

  //     if (!userInstance || !groupInstance) {
  //       throw new NotFound();
  //     }

  //     await groupInstance.addUser(userInstance);

  //     res.status(204).end();
  //   } catch (e) {
  //     next(e);
  //   }
  // };

  public static getById = async (
    req: IGroupRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.body;

    try {
      const group: GroupModel | null = await GroupModel.findByPk(id, {
        include: [{ model: UserModel }, { model: SubjectModel }],
      });

      if (!group) {
        throw new NotFound();
      }

      res.status(200).json(group);
    } catch (e) {
      next(e);
    }
  };

  public static getMyGroups = async (
    req: IGroupRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { user } = req;

    try {
      if (!user || !user.id) {
        throw new Unauthorized();
      }

      const groups: GroupModel[] | null = await GroupModel.findAll({
        where: { creatorId: user.id },
      });

      if (!groups) {
        throw new NotFound();
      }

      res.status(200).json(groups);
    } catch (e) {
      next(e);
    }
  };

  // public static addSubject = async (
  //   req: IGroupRequest,
  //   res: Response,
  //   next: NextFunction
  // ) => {
  //   const { id, subjects } = req.body;

  //   try {
  //     if (!subjects || subjects.length === 0) {
  //       throw new BadRequest();
  //     }

  //     const subjectInstance: SubjectModel | null = await SubjectModel.findByPk(
  //       subjectId
  //     );
  //     const groupInstance: GroupModel | null = await GroupModel.findByPk(id);

  //     if (!subjectInstance || !groupInstance) {
  //       throw new NotFound();
  //     }

  //     await groupInstance.addSubject(subjectInstance);

  //     res.status(204).end();
  //   } catch (e) {
  //     next(e);
  //   }
  // };
}

export default Group;
