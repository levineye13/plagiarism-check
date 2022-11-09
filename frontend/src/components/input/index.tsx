import React, { FC } from 'react';

import styles from './index.module.scss';

interface IInput {
  type: 'text' | 'email' | 'password';
  required?: boolean;
  placeholder?: string;
  value?: string;
  pattern?: string;
}

const Input: FC<IInput> = ({
  type,
  required = false,
  placeholder,
  value,
  pattern,
}) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
      />
      <span className={styles.error}></span>
    </label>
  );
};

export default Input;
