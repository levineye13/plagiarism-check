import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { FCWithChildren } from '../../utils/types';
import DeleteButton from '../delete-button';
import styles from './index.module.scss';
import Delete from '../../images/delete.png';

const user = {
  role: 'teacher',
};

const GroupItem: FCWithChildren = ({ children }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const onClick = (): void => {
    if (linkRef.current !== null) {
      linkRef.current.remove();
    }
  };

  return (
    <Link className={styles.link} to="#" ref={linkRef}>
      {children}
      {user.role !== 'student' && <DeleteButton onClick={onClick} />}
    </Link>
  );
};

export default GroupItem;
