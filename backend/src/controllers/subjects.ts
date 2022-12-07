import { NextFunction, Response } from 'express';

import { Subject as SubjectModel } from '../models';
import { IRequest } from '../utils/interfaces';

class Subject {
  public static getAll = async (
    req: IRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const subjects: SubjectModel[] = await SubjectModel.findAll();

      if (subjects.length === 0) {
        res.status(200).json({
          success: true,
          subjects: [],
          text: 'Дисциплины пока что отсутствуют',
        });
      } else {
        res.status(200).json({ success: true, subjects });
      }
    } catch (e) {
      next(e);
    }
  };
}

export default Subject;
