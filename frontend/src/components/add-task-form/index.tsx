import React, { FC, FormEvent } from 'react';

import Input from '../input';
import Button from '../button';
import styles from './index.module.scss';
import { Fields, formNames } from '../../utils/constants';
import { useForm } from '../../hooks/useForm';
import { clearCoursesAndGroups, createTask } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { TLanguage } from '../../utils/types';

interface IAddTaskForm {
  readonly id: string;
  readonly onSubmit: () => void;
  readonly onButtonClick: () => void;
}

type TFields = Fields.AddTask | 'description' | 'language';

const initialFields: { [key in TFields]: string } = {
  addTask: '',
  description: '',
  language: '',
};

const AddTaskForm: FC<IAddTaskForm> = ({ id, onSubmit, onButtonClick }) => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state) => state.editor);
  const {
    values,
    onChange,
    onSubmit: onSubmitForm,
  } = useForm<TFields>(formNames.addTask, initialFields, [], createTask, {
    language,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    onSubmitForm(e);
    onSubmit();
    dispatch(clearCoursesAndGroups());
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => handleSubmit(e)}
      name={formNames.addTask}
      id={id}
      noValidate
    >
      <div className={styles.fields}>
        <Input
          type="text"
          name={Fields.AddTask}
          required
          placeholder="Введите название работы"
          value={values.addTask ? values.addTask.value : ''}
          error={values.addTask ? values.addTask.error : ''}
          onChange={onChange}
        />
        <input
          type="textarea"
          className={styles.area}
          name="description"
          required
          value={values.description ? values.description.value : ''}
          placeholder="Введите описание работы"
          onChange={onChange}
        />
      </div>
      <Button type="submit" onClick={onButtonClick}>
        Добавить
      </Button>
    </form>
  );
};

export default AddTaskForm;
