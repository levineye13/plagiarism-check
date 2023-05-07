import React, { FC } from 'react';

import Input from '../input';
import Button from '../button';
import styles from './index.module.scss';
import { useForm } from '../../hooks/useForm';
import { Fields, formNames } from '../../utils/constants';

interface IForm {
  style?: React.CSSProperties;
}

type TFields = Fields.Grade;

const initialFields: { [key in TFields]: string } = {
  grade: '',
};

const AssessmentForm: FC<IForm> = ({ style }) => {
  // const { values, onChange, onSubmit } = useForm<TFields>(
  //   formNames.assessmentForm,
  //   initialFields
  // );

  return (
    <form className={styles.form} style={style} name="assessmentForm">
      <Input
        type="text"
        name="grade"
        value=""
        error=""
        onChange={() => {}}
        required
        placeholder="Оценка"
        pattern="(2|3|4|5)"
      />
      <textarea className={styles.area} placeholder="Отзыв" />
      <Button type="submit">Оценить</Button>
    </form>
  );
};

export default AssessmentForm;
