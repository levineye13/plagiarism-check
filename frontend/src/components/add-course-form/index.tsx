import React, { FC } from 'react';

import Input from '../input';
import Button from '../button';
import styles from './index.module.scss';
import { useForm } from '../../hooks/useForm';
import { Fields, formNames } from '../../utils/constants';

interface IAddCourseForm {
  readonly id: string;
  readonly onSubmit: () => void;
  readonly onButtonClick: () => void;
}

type TFields = Fields.AddCourse;

const initialFields: { [key in TFields]: string } = {
  addCourse: '',
};

const AddCourseForm: FC<IAddCourseForm> = ({ id, onSubmit, onButtonClick }) => {
  const {
    values,
    onChange,
    onSubmit: onSubmitForm,
  } = useForm<TFields>(formNames.addCourse, initialFields);

  return (
    <form
      name={formNames.addCourse}
      className={styles.form}
      id={id}
      onSubmit={onSubmitForm}
      noValidate
    >
      <Input
        type="text"
        name={Fields.AddGroup}
        required
        placeholder="Добавить курс"
        value={values.addCourse ? values.addCourse.value : ''}
        error={values.addCourse ? values.addCourse.error : ''}
        onChange={onChange}
      />
      <Button type="submit" onClick={onButtonClick}>
        Добавить
      </Button>
    </form>
  );
};

export default AddCourseForm;
