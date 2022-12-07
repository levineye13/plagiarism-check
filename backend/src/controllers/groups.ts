import { NextFunction, Response } from 'express';

import { Group as GroupModel } from '../models';
import { IRequest } from '../utils/interfaces';

class Group {
  public static getAll = async (
    req: IRequest,
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
}

export default Group;
