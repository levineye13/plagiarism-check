import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setField, setFieldError } from '../store/actions/form';
import { TAppForm } from '../utils/types';
import { TAppActions, TAppThunk } from '../store/types';
import { ActionCreator } from 'redux';

export const useForm = <TFields extends string>(
  formName: TAppForm,
  initialFields: { [key in TFields]: string },
  omitFields?: TFields[],
  submitAction?: TAppThunk | ActionCreator<TAppActions>
): {
  values: {
    [key in TFields]: { value: string; error: string };
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
} => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form[formName]);

  useEffect(() => {
    for (const field in initialFields) {
      dispatch(
        setField({
          form: formName,
          key: field,
          value: initialFields[field],
        })
      );
    }
  }, [dispatch, formName, initialFields]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, type } = e.currentTarget;

    const value =
      e.currentTarget.type &&
      e.currentTarget.type === 'input' &&
      type === 'checkbox'
        ? e.currentTarget.checked
        : e.currentTarget.value;

    if (!e.currentTarget.validity.valid) {
      const error = e.currentTarget.validationMessage;
      dispatch(setFieldError({ form: formName, key: name, value: error }));
    } else {
      dispatch(setFieldError({ form: formName, key: name, value: '' }));
    }

    dispatch(setField({ form: formName, key: name, value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (typeof submitAction === 'function') {
      const arg: { [key: string]: string } = {};

      for (const key in form) {
        if (omitFields && omitFields.includes(key as TFields)) {
          continue;
        }

        arg[key] = form[key].value;
      }

      dispatch(submitAction(arg));
    }
  };

  return {
    values: form as {
      [key in TFields]: { value: string; error: string };
    },
    onChange: handleChange,
    onSubmit: handleSubmit,
  };
};
