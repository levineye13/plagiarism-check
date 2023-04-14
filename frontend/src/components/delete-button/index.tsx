import React, { FC } from 'react';

import styles from './index.module.scss';
import Delete from '../../images/delete.png';

interface IButton {
  readonly onClick?: () => void;
  readonly style?: React.CSSProperties;
  readonly className?: string;
}

const DeleteButton: FC<IButton> = ({ onClick, style, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();

    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <button
      style={style}
      className={`${styles.button} ${className}`}
      type="button"
      onClick={handleClick}
    >
      <img className={styles.img} src={Delete} alt="Значок удаления" />
    </button>
  );
};

export default DeleteButton;
