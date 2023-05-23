import React, { FC } from 'react';

import GroupItem from '../group-item';
import styles from './index.module.scss';
import { IGroup } from '../../utils/interfaces';

interface IGroupList {
  readonly path: string;
  readonly list: Array<IGroup>;
}

const GroupList: FC<IGroupList> = ({ path, list }) => {
  return (
    <ul className={styles.groups}>
      {list.map((group) => (
        <li className={styles.item} key={group.id}>
          <GroupItem id={group.id} path={path}>
            {group.name}
          </GroupItem>
        </li>
      ))}
    </ul>
  );
};

export default GroupList;
