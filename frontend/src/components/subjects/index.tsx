import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

const subjects = [
  { id: 1, title: 'Алгоритмы' },
  { id: 2, title: 'Структуры данных' },
];

const Subjects: FC = () => {
  const navigate = useNavigate();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    subjectId: number
  ) => {
    e.preventDefault();
    navigate(`${subjectId}`, { state: { subjectId } });
  };

  return (
    <ul className={styles.list}>
      {subjects.map((subject) => (
        <li className={styles.item} key={subject.id}>
          <Link
            onClick={(e) => handleClick(e, subject.id)}
            to=""
            className={styles.name}
          >
            {subject.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Subjects;
