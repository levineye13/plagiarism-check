import React from 'react';

import { FCWithChildren } from '../../utils/types';
import styles from './index.module.scss';

interface ISubmit {
  readonly type: 'button' | 'submit' | 'reset';
  readonly onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  readonly style?: React.CSSProperties;
}

const Submit: FCWithChildren<ISubmit> = ({
  children,
  type,
  onClick,
  style,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.button}
      style={style}
    >
      {children}
    </button>
  );
};

export default Submit;
