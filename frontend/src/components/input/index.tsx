import React, { FC } from 'react';

import styles from './index.module.scss';

interface IInput {
  type: 'text' | 'email' | 'password';
  required?: boolean;
  placeholder?: string;
  value?: string;
}

const Input: FC<IInput> = ({
  type,
  required = false,
  placeholder = '',
  value = '',
}) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
};

export default Input;
