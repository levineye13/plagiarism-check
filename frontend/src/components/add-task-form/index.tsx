import React, { FC } from 'react';

import Input from '../input';
import Button from '../button';
import styles from './index.module.scss';

interface IAddTaskForm {
  readonly id: string;
  readonly onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  readonly onButtonClick: () => void;
}

const AddTaskForm: FC<IAddTaskForm> = ({ id, onSubmit, onButtonClick }) => {
  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
      name="addTask"
      id={id}
      noValidate
    >
      <div className={styles.fields}>
        <Input type="text" required placeholder="Введите название работы" />
        <textarea
          className={styles.area}
          required
          placeholder="Введите описание работы"
        />
      </div>
      <Button type="button" onClick={onButtonClick}>
        Добавить
      </Button>
    </form>
  );
};

export default AddTaskForm;
