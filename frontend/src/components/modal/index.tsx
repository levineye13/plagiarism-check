import React from 'react';
import { FCWithChildren } from '../../utils/types';

import Button from '../button';
import styles from './index.module.scss';
import Close from '../../images/close.svg';

interface IModal {
  readonly buttonText: string;
  //readonly callback: () => void;
}

const Modal: FCWithChildren<IModal> = ({ children, buttonText }) => {
  return (
    <dialog className={styles.modal} open={true}>
      <button type="button" className={styles.button}>
        <img className={styles.img} src={Close} alt="Кнопка закрытия" />
      </button>
      <p className={styles.text}>{children}</p>
      <Button type="button">{buttonText}</Button>
    </dialog>
  );
};

export default Modal;
