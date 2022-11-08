import React, { FC } from 'react';

import { FCWithChildren } from '../../utils/types';
import styles from './index.module.scss';

interface ISectionTitle {
  style?: React.CSSProperties;
}

const SectionTitle: FCWithChildren<ISectionTitle> = ({ children, style }) => {
  return (
    <h2 className={styles.title} style={style}>
      {children}
    </h2>
  );
};

export default SectionTitle;
