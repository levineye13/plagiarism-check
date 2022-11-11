import React, { FC } from 'react';

import styles from './index.module.scss';
import Edit from '../../images/edit.png';

interface IButton {
  readonly onClick?: () => void;
}

const EditButton: FC<IButton> = ({ onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();

    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      <img className={styles.img} src={Edit} alt="Значок редактирования" />
    </button>
  );
};

export default EditButton;
