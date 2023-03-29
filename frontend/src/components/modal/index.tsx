import React, { FC, MouseEvent } from 'react';

import Button from '../button';
import Background from '../background';
import styles from './index.module.scss';
import Close from '../../images/close.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { modalClose, modalSetAgree } from '../../store/actions/modal';

const Modal: FC = () => {
  const dispatch = useAppDispatch();
  const { question, form } = useAppSelector((state) => state.modal);

  const handleClose = (): void => {
    dispatch(modalClose());
  };

  return (
    <>
      <Background onClose={handleClose} />
      <dialog className={styles.modal} open>
        <button type="button" className={styles.button} onClick={handleClose}>
          <img className={styles.img} src={Close} alt="Кнопка закрытия" />
        </button>
        <p className={styles.text}>{question}</p>
        <Button type="submit" form={form}>
          Да
        </Button>
      </dialog>
    </>
  );
};

export default Modal;
