import React, { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

const BackButton: FC = (): ReactElement => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(-1);
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      &#11164;&thinsp;Назад
    </button>
  );
};

export default BackButton;
