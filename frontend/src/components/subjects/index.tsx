import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

const subjects = [
  { id: 1, title: 'Алхимия' },
  { id: 2, title: 'Наложение чар' },
  { id: 3, title: 'Кузнечное дело' },
];

const Subjects: FC = () => {
  const navigate = useNavigate();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <ul className={styles.list}>
      {subjects.map((subject) => (
        <li className={styles.item} key={subject.id}>
          <Link
            onClick={(e) => handleClick(e, `${subject.id}`)}
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
