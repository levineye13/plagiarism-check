import { NextFunction, Response } from 'express';
import { Op } from 'sequelize';

import { Group, Subject as SubjectModel } from '../models';
import { ISubjectRequest } from '../utils/interfaces';
import { BadRequest, Conflict, NotFound, Unauthorized } from '../errors';

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
    const { name, groups } = req.body;
    const { user } = req;

    try {
      if (user === undefined || user.id === undefined) {
        throw new Unauthorized();
      }

      const isGroup: SubjectModel | null = await SubjectModel.findOne({
        where: { name },
      });

      if (isGroup) {
        throw new Conflict();
      }

      if (!groups || groups.length <= 0) {
        throw new BadRequest();
      }

      const newSubject = await SubjectModel.create({
        name,
        creatorId: user.id,
      });

      const groupInstances: Group[] = await Group.findAll({
        where: {
          name: {
            [Op.in]: [...groups],
          },
        },
      });

      groupInstances.forEach(async (groupInstance) => {
        await groupInstance.addSubject(newSubject);
      });

      res.status(201).json({ id: newSubject.id, name: newSubject.name });
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

      res.status(200).json({ success: true });
    } catch (e) {
      next(e);
    }
  };

  public static getById = async (
    req: ISubjectRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.body;

    try {
      const subject: SubjectModel | null = await SubjectModel.findByPk(id);

      if (!subject) {
        throw new NotFound();
      }

      res.status(200).json(subject);
    } catch (e) {
      next(e);
    }
  };

  public static getMySubjects = async (
    req: ISubjectRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { user } = req;

    try {
      if (!user || !user.id) {
        throw new Unauthorized();
      }

      const subjects: SubjectModel[] | null = await SubjectModel.findAll({
        where: { creatorId: user.id },
      });

      if (!subjects) {
        throw new NotFound();
      }

      res.status(200).json(subjects);
    } catch (e) {
      next(e);
    }
  };
}

export default Subject;
