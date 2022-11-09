import React from 'react';

import { FCWithChildren } from '../../utils/types';
import styles from './index.module.scss';

const Submit: FCWithChildren = ({ children }) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};

export default Submit;
