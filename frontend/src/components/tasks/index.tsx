import React, { FC } from 'react';

import Task from '../task';
import styles from './index.module.scss';

const tasks = [
  {
    id: 1,
    subject: 'Наложение чар',
    title: 'Лабораторная 1',
    description: 'Создание медного жезла',
    text: 'Вам потребуется изготовить медный жезл. Для приготовления нужны следующие ингредиенты......',
  },
  {
    id: 2,
    subject: 'Наложение чар',
    title: 'Лабораторная 2',
    text: 'Наложите чары на оружие',
  },
  {
    id: 3,
    subject: 'Наложение чар',
    title: 'Лабораторная 3',
    description: 'Создание чар для кольца',
    text: 'Наложите чары на кольцо',
  },
  {
    id: 4,
    subject: 'Наложение чар',
    title: 'Лабораторная 4',
    text: 'Наложите чары на плащ',
  },
];

const Tasks: FC = () => {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <li className={styles.item} key={task.id}>
          <Task title={task.title} description={task.description}>
            {task.text}
          </Task>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
