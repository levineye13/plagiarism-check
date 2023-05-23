import React, { FC, FormEvent } from 'react';

import Input from '../input';
import Button from '../button';
import styles from './index.module.scss';
import { useForm } from '../../hooks/useForm';
import { Fields, formNames } from '../../utils/constants';
import { createSubject, setField } from '../../store/actions';
import { useAppDispatch } from '../../store/hooks';

interface IAddCourseForm {
  readonly id: string;
  readonly onSubmit: () => void;
  readonly onButtonClick: () => void;
  readonly groups: string[];
}

type TFields = Fields.AddCourse;

const initialFields: { [key in TFields]: string } = {
  addCourse: '',
};

const AddCourseForm: FC<IAddCourseForm> = ({
  id,
  groups,
  onSubmit,
  onButtonClick,
}) => {
  const dispatch = useAppDispatch();
  const {
    values,
    onChange,
    onSubmit: onSubmitForm,
  } = useForm<TFields>(formNames.addCourse, initialFields, [], createSubject);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    dispatch(
      setField({ form: formNames.addCourse, key: 'groups', value: groups })
    );
    onSubmitForm(e);
    onSubmit();
  };

  return (
    <form
      name={formNames.addCourse}
      className={styles.form}
      id={id}
      onSubmit={(e) => handleSubmit(e)}
      noValidate
    >
      <Input
        type="text"
        name={Fields.AddCourse}
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
