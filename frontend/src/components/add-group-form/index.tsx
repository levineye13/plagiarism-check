import React, { FC } from 'react';

import Input from '../input';
import Button from '../button';
import styles from './index.module.scss';

interface IAddGroupForm {
  readonly id: string;
  readonly onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  readonly onButtonClick: () => void;
}

const AddGroupForm: FC<IAddGroupForm> = ({ id, onSubmit, onButtonClick }) => {
  return (
    <form
      name="addGroup"
      className={styles.form}
      id={id}
      onSubmit={onSubmit}
      noValidate
    >
      <Input
        type="text"
        required
        placeholder="Добавить группу"
        pattern="[А-ЯЁ]{4}\-\d\d\-\d\d"
      />
      <Button type="button" onClick={onButtonClick}>
        Добавить
      </Button>
    </form>
  );
};

export default AddGroupForm;
