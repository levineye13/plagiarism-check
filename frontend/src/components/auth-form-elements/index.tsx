import React from 'react';

import { FCWithChildren } from '../../utils/types';
import Button from '../button';
import styles from './index.module.scss';

interface IAuthFormElements {
  readonly buttonText: string;
}

const AuthFormElements: FCWithChildren<IAuthFormElements> = ({
  children,
  buttonText,
}) => {
  return (
    <>
      <fieldset className={styles.fieldset}>{children}</fieldset>
      <Button type="submit">{buttonText}</Button>
    </>
  );
};

export default AuthFormElements;
