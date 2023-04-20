import React, { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setField } from '../store/actions/form';
import { TAppForm } from '../utils/types';

export const useForm = (
  formName: TAppForm,
  submitCallback: () => void
): {
  values: {
    [key: string]: string | number;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
} => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form[formName]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, type } = e.currentTarget;

    const value =
      type === 'checkbox' ? e.currentTarget.checked : e.currentTarget.value;

    dispatch(setField({ form: formName, key: name, value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    submitCallback();
  };

  return { values: form, onChange: handleChange, onSubmit: handleSubmit };
};
