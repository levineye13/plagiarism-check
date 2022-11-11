import React, { FC } from 'react';

import styles from './index.module.scss';
import Delete from '../../images/delete.png';

interface IButton {
  readonly onClick?: () => void;
}

const DeleteButton: FC<IButton> = ({ onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      <img className={styles.img} src={Delete} alt="Значок удаления" />
    </button>
  );
};

export default DeleteButton;
