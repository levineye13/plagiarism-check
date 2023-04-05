import React, { FC } from 'react';

import Input from '../input';
import Button from '../button';
import styles from './index.module.scss';

interface IForm {
  style?: React.CSSProperties;
}

const AssessmentForm: FC<IForm> = ({ style }) => {
  return (
    <form className={styles.form} style={style} name="assessmentForm">
      <Input type="text" required placeholder="Оценка" pattern="(2|3|4|5)" />
      <textarea className={styles.area} placeholder="Отзыв" />
      <Button type="submit">Оценить</Button>
    </form>
  );
};

export default AssessmentForm;
