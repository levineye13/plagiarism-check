import React, { FC, useState } from 'react';

import styles from './index.module.scss';
import { setField } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { TAppForm } from '../../utils/types';

interface IInput {
  type: 'text' | 'email' | 'password';
  name: string;
  required?: boolean;
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  pattern?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const Input: FC<IInput> = ({
  type,
  name,
  error,
  onChange,
  required = false,
  placeholder,
  value,
  pattern,
  inputRef,
}) => {
  return (
    <label className={`${styles.label} ${required ? styles.required : ''}`}>
      <input
        className={styles.input}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        onChange={onChange}
        ref={inputRef}
      />
      <span className={styles.error}>{error}</span>
    </label>
  );
};

export default Input;
