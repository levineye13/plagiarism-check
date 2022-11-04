import React from 'react';

import { FCWithChildren } from '../../utils/types';
import Button from '../submit';
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
      <Button>{buttonText}</Button>
    </>
  );
};

export default AuthFormElements;
