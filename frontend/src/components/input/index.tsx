import React, { FC, useState } from 'react';

import styles from './index.module.scss';

interface IInput {
  type: 'text' | 'email' | 'password';
  required?: boolean;
  placeholder?: string;
  value?: string;
  pattern?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const Input: FC<IInput> = ({
  type,
  required = false,
  placeholder,
  value,
  pattern,
  inputRef,
}) => {
  const [inputValue, setValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <label className={`${styles.label} ${required ? styles.required : ''}`}>
      <input
        className={styles.input}
        type={type}
        required={required}
        placeholder={placeholder}
        value={inputValue}
        pattern={pattern}
        onChange={handleChange}
        ref={inputRef}
      />
      <span className={styles.error}></span>
    </label>
  );
};

export default Input;
