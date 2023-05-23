import React, { FC, ReactElement, useEffect } from 'react';

import List from '../../group-list';
import SectionTitle from '../../section-title';
import Back from '../../back-button';
import styles from './index.module.scss';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getAllGroupsOwner } from '../../../store/actions';

const Groups: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { ownGroups } = useAppSelector((state) => state.groups);
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getAllGroupsOwner());
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <Back />
      <SectionTitle style={{ marginBottom: 20 }}>Список групп</SectionTitle>
      <List path={pathname} list={ownGroups} />
    </section>
  );
};

export default Groups;
