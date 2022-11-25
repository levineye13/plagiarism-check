import { IController } from '../utils/interfaces';
import { Subject as SubjectModel } from '../models';
import { Unauthorized } from '../errors';

class Subject {
  public static getAll = async (data: IController) => {
    try {
      const subjects: SubjectModel[] = await SubjectModel.findAll();

      if (subjects.length === 0) {
        data.res.status(200).json({
          success: true,
          subjects: [],
          text: 'Дисциплины пока что отсутствуют',
        });
      } else {
        data.res.status(200).json({ success: true, subjects });
      }
    } catch (e) {
      console.error(e);
    }
  };

  public static getMy = async (data: IController) => {
    const { id } = data.req.user;

    try {
      if (id === undefined) {
        throw new Unauthorized();
      }

      const subjects: SubjectModel[] = await SubjectModel.findAll();

      if (subjects.length === 0) {
        data.res.status(200).json({
          success: true,
          subjects: [],
          text: 'Дисциплины пока что отсутствуют',
        });
      } else {
        data.res.status(200).json({ success: true, subjects });
      }
    } catch (e) {
      console.error(e);
    }
  };
}

export default Subject;
