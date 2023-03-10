import React from 'react';
import { FCWithChildren } from '../../utils/types';

import styles from './index.module.scss';

const Background: FCWithChildren = ({ children }) => {
  return <div className={styles.div}>{children}</div>;
};

export default Background;
