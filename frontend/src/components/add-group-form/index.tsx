import React, { FC, FormEvent } from 'react';

import Input from '../input';
import Button from '../button';
import styles from './index.module.scss';
import { useForm } from '../../hooks/useForm';
import { Fields, formNames } from '../../utils/constants';
import { createGroup } from '../../store/actions';

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
  } = useForm<TFields>(formNames.addGroup, initialFields, [], createGroup);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    onSubmitForm(e);
    onSubmit();
  };

  return (
    <form
      name={formNames.addGroup}
      className={styles.form}
      id={id}
      onSubmit={handleSubmit}
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
      />
      <Button type="submit" onClick={onButtonClick}>
        Добавить
      </Button>
    </form>
  );
};

export default AddGroupForm;
