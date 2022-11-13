import React from 'react';

import { FCWithChildren } from '../../utils/types';
import styles from './index.module.scss';

interface ISubmit {
  readonly onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  readonly style?: React.CSSProperties;
}

const Submit: FCWithChildren<ISubmit> = ({ children, onClick, style }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
      style={style}
    >
      {children}
    </button>
  );
};

export default Submit;
