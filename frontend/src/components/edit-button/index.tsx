import React, { FC } from 'react';

import styles from './index.module.scss';
import Edit from '../../images/edit.png';

interface IButton {
  readonly onClick?: () => void;
}

const EditButton: FC<IButton> = ({ onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      <img className={styles.img} src={Edit} alt="Значок удаления" />
    </button>
  );
};

export default EditButton;
