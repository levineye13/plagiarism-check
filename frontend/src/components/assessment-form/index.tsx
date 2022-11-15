import React, { FC } from 'react';

import Input from '../input';
import Button from '../submit';
import styles from './index.module.scss';

const AssessmentForm: FC = () => {
  return (
    <form className={styles.form} name="assessmentForm">
      <Input type="text" required placeholder="Оценка" pattern="(2|3|4|5)" />
      <Button>Оценить</Button>
    </form>
  );
};

export default AssessmentForm;
