import React, { FC } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Title from '../../components/section-title';
import { ROUTES } from '../../utils/constants';
import styles from './index.module.scss';

const data = [
  { id: 1, name: 'Иванов Иван Иванович', ready: true },
  { id: 2, name: 'Васильев Василий Васильевич', ready: false },
  { id: 3, name: 'Егоров Егор Егорович', ready: true },
];

const Group: FC = () => {
  const { taskId } = useParams();
  const { pathname } = useLocation();
  console.log(pathname);

  const path: string = taskId
    ? `${pathname}${ROUTES.users}`
    : `${ROUTES.users}`;

  const getStyle = (user: { ready: boolean }): string =>
    taskId ? (user.ready ? styles.ready : styles.notready) : '';

  return (
    <section className={styles.section}>
      <Title>Группа: AAA-21-20</Title>
      <ul className={styles.list}>
        {data.map((user) => (
          <li className={styles.item} key={user.id}>
            <Link
              className={`${styles.link} ${getStyle(user)}`}
              to={`${path}/${user.id}`}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Group;
