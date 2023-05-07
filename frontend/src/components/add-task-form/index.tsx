import React, { FC } from 'react';

import Input from '../input';
import Button from '../button';
import styles from './index.module.scss';
import { Fields, formNames } from '../../utils/constants';
import { useForm } from '../../hooks/useForm';

interface IAddTaskForm {
  readonly id: string;
  readonly onSubmit: () => void;
  readonly onButtonClick: () => void;
}

type TFields = Fields.AddTask | 'description';

const initialFields: { [key in TFields]: string } = {
  addTask: '',
  description: '',
};

const AddTaskForm: FC<IAddTaskForm> = ({ id, onSubmit, onButtonClick }) => {
  const {
    values,
    onChange,
    onSubmit: onSubmitForm,
  } = useForm<TFields>(formNames.addTask, initialFields, onSubmit);

  return (
    <form
      className={styles.form}
      onSubmit={onSubmitForm}
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
