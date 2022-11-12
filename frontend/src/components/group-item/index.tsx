import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { FCWithChildren } from '../../utils/types';
import DeleteButton from '../delete-button';
import styles from './index.module.scss';
import { ROUTES } from '../../utils/constants';

const user = {
  role: 'teacher',
};

interface IGroupItem {
  readonly id: number;
}

const GroupItem: FCWithChildren<IGroupItem> = ({ id, children }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const navigate = useNavigate();

  const onDelete = (): void => {
    if (linkRef.current !== null) {
      linkRef.current.remove();
    }
  };

  const onClick = (): void => {
    navigate(`${ROUTES.groups}/${id}`);
  };

  return (
    <article className={styles.link} ref={linkRef} onClick={onClick}>
      {children}
      {user.role !== 'student' && <DeleteButton onClick={onDelete} />}
    </article>
  );
};

export default GroupItem;
