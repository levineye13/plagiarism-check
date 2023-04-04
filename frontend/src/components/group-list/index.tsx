import React, { FC } from 'react';

import GroupItem from '../group-item';
import styles from './index.module.scss';

const subject = {
  title: 'Алгоритмы',
  groups: [
    { id: 1, title: 'AAA-21-20' },
    { id: 2, title: 'BBB-22-21' },
    { id: 3, title: 'CCC-23-22' },
  ],
};

interface IGroupList {
  readonly path: string;
}

const GroupList: FC<IGroupList> = ({ path }) => {
  return (
    <ul className={styles.groups}>
      {subject.groups.map((group) => (
        <li className={styles.item} key={group.id}>
          <GroupItem id={group.id} path={path}>
            {group.title}
          </GroupItem>
        </li>
      ))}
    </ul>
  );
};

export default GroupList;
