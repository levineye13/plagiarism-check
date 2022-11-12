import React, { FC } from 'react';

import Task from '../task';
import styles from './index.module.scss';

const tasks = [
  {
    id: 1,
    subject: 'Алгоритмы',
    title: 'Лабораторная 1',
    description: 'Пузырьковая сортировка',
    text: 'Вы должны написать алгоритм пузырьковой сортировки при преподавателе не более чем за 30 секунд',
  },
  {
    id: 2,
    subject: 'Алгоритмы',
    title: 'Лабораторная 2',
    text: 'Необходимо написать программу, которая будет сортировать .....',
  },
  {
    id: 3,
    subject: 'Структуры данных',
    title: 'Лабораторная 3',
    description: 'Очередь',
    text: 'Реализуйте структуру данных "Очередь" с помощью односвязного списка',
  },
];

const Tasks: FC = () => {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <li className={styles.item} key={task.id}>
          <Task id={task.id} title={task.title} description={task.description}>
            {task.text}
          </Task>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
