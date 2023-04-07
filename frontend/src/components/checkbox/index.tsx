import React, { FC, useState } from 'react';

import styles from './index.module.scss';

const Checkbox: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLLabelElement>): void => {};

  return (
    <label className={styles.label} onClick={handleClick}>
      <div className={styles.custom} />
      <input type="checkbox" className={styles.hidden} checked={isChecked} />
    </label>
  );
};

export default Checkbox;
