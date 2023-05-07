import React, { FC } from 'react';

import Input from '../input';
import Button from '../button';
import styles from './index.module.scss';
import { useForm } from '../../hooks/useForm';
import { Fields, formNames } from '../../utils/constants';

interface IAddGroupForm {
  readonly id: string;
  readonly onSubmit: () => void;
  readonly onButtonClick: () => void;
}

type TFields = Fields.AddGroup;

const initialFields: { [key in TFields]: string } = {
  addGroup: '',
};

const AddGroupForm: FC<IAddGroupForm> = ({ id, onSubmit, onButtonClick }) => {
  const {
    values,
    onChange,
    onSubmit: onSubmitForm,
  } = useForm<TFields>(formNames.addGroup, initialFields, onSubmit);

  return (
    <form
      name={formNames.addGroup}
      className={styles.form}
      id={id}
      onSubmit={onSubmitForm}
      noValidate
    >
      <Input
        type="text"
        name={Fields.AddGroup}
        required
        placeholder="Добавить группу"
        value={values.addGroup ? values.addGroup.value : ''}
        error={values.addGroup ? values.addGroup.error : ''}
        onChange={onChange}
        pattern="[А-ЯЁ]{4}\-\d\d\-\d\d"
      />
      <Button type="submit" onClick={onButtonClick}>
        Добавить
      </Button>
    </form>
  );
};

export default AddGroupForm;
