import { NextFunction, Response } from 'express';

import { Subject as SubjectModel } from '../models';
import { ISubjectRequest } from '../utils/interfaces';
import { BadRequest, NotFound } from '../errors';

class Subject {
  public static getAll = async (
    req: ISubjectRequest,
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

  public static create = async (
    req: ISubjectRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { name } = req.body;

      const newSubject = await SubjectModel.create({ name });

      res.status(201).json({
        success: true,
        subject: { id: newSubject.id, name: newSubject.name },
      });
    } catch (e) {
      next(e);
    }
  };

  public static delete = async (
    req: ISubjectRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.body;

    if (id === undefined) {
      throw new BadRequest();
    }

    try {
      const subject: SubjectModel | null = await SubjectModel.findByPk(id);

      if (subject === null) {
        throw new NotFound();
      }

      await subject.destroy();
    } catch (e) {
      next(e);
    }
  };
}

export default Subject;
