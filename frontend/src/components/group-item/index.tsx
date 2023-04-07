import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { FCWithChildren } from '../../utils/types';
import DeleteButton from '../delete-button';
import styles from './index.module.scss';

const user = {
  role: 'admin',
};

interface IGroupItem {
  readonly id: number;
  readonly path: string;
}

const GroupItem: FCWithChildren<IGroupItem> = ({ id, path, children }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const navigate = useNavigate();

  const onDelete = (): void => {
    if (linkRef.current !== null) {
      linkRef.current.remove();
    }
  };

  const onClick = (): void => {
    navigate(`${path}/${id}`);
  };

  return (
    <article className={styles.link} ref={linkRef} onClick={onClick}>
      {children}
      {user.role !== 'user' && <DeleteButton onClick={onDelete} />}
    </article>
  );
};

export default GroupItem;
