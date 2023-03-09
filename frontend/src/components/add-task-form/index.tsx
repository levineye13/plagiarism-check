import React, { FC } from 'react';

import Input from '../input';
import Button from '../button';
import styles from './index.module.scss';

const AddTaskForm: FC = () => {
  return (
    <form className={styles.form} name="addTaskForm">
      <Input type="text" required placeholder="Введите заголовок" />
      <Input type="text" placeholder="Введите описание" />
      <Input type="text" required placeholder="Введите задание" />
      <Button type="submit">Добавить</Button>
    </form>
  );
};

export default AddTaskForm;
