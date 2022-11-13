import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Title from '../../components/section-title';
import { ROUTES } from '../../utils/constants';
import styles from './index.module.scss';

const data = [
  { id: 1, name: 'Иванов Иван Иванович' },
  { id: 2, name: 'Васильев Василий Васильевич' },
  { id: 3, name: 'Егоров Егор Егорович' },
];

const Group: FC = () => {
  return (
    <section className={styles.section}>
      <Title>Группа: AAA-21-20</Title>
      <ul className={styles.list}>
        {data.map((user) => (
          <li className={styles.item} key={user.id}>
            <Link className={styles.link} to={`${ROUTES.users}/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Group;
