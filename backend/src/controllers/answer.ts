import { NextFunction, Response } from 'express';

import { Task as TaskModel, Answer as AnswerModel } from '../models';
import { IAnswerRequest } from '../utils/interfaces';
import { Conflict, NotFound, Unauthorized } from '../errors';

class Answer {
  public static create = async (
    req: IAnswerRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { name, code, taskId } = req.body;
    const { user } = req;

    try {
      if (!user || !user.id) {
        throw new Unauthorized();
      }

      const isAnswer: AnswerModel | null = await AnswerModel.findOne({
        where: { name },
      });

      if (isAnswer) {
        throw new Conflict();
      }

      const task: TaskModel | null = await TaskModel.findByPk(taskId);

      if (!task) {
        throw new NotFound();
      }

      const newAnswer = await AnswerModel.create({
        name,
        code,
        creatorId: user.id,
      });

      task.addAnswer(newAnswer);

      res.status(201).json({
        name: newAnswer.name,
        code: newAnswer.code,
      });
    } catch (e) {
      next(e);
    }
  };

  public static getAnswersByTaskId = async (
    req: IAnswerRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { taskId } = req.body;

    try {
      const task: TaskModel | null = await TaskModel.findByPk(taskId, {
        include: { all: true },
      });

      if (!task) {
        throw new NotFound();
      }

      const answers = task.answers || [];

      res.status(200).json({ answers });
    } catch (e) {
      next(e);
    }
  };
}

export default Answer;
