import React, { FC } from 'react';

import Input from '../input';
import Button from '../submit';
import styles from './index.module.scss';

const AddGroupForm: FC = () => {
  return (
    <form name="addGroupForm" className={styles.form}>
      <Input
        type="text"
        required
        placeholder="Добавить группу"
        pattern="[А-ЯЁ]{4}\-\d\d\-\d\d"
      />
      <Button>Добавить</Button>
    </form>
  );
};

export default AddGroupForm;
