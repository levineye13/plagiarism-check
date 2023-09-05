import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './index.module.scss';
import { useAppSelector } from '../../store/hooks';

const Subjects: FC = () => {
  const navigate = useNavigate();
  const { subjects } = useAppSelector((state) => state.auth.user.group);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    subjectId: number
  ) => {
    e.preventDefault();
    navigate(`${subjectId}`, { state: { subjectId } });
  };

  return (
    <ul className={styles.list}>
      {subjects &&
        subjects.map((subject) => (
          <li className={styles.item} key={subject.id}>
            <Link
              onClick={(e) => handleClick(e, subject.id)}
              to=""
              className={styles.name}
            >
              {subject.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Subjects;
