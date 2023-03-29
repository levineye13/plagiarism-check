import React from 'react';
import { FCWithChildren } from '../../utils/types';

import styles from './index.module.scss';

interface IBackground {
  readonly onClose: () => void;
}

const Background: FCWithChildren<IBackground> = ({ children, onClose }) => {
  return (
    <div className={styles.div} onClick={onClose}>
      {children}
    </div>
  );
};

export default Background;
