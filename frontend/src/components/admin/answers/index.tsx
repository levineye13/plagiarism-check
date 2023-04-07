import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import BackButton from '../../back-button';
import SectionTitle from '../../section-title';
import styles from './index.module.scss';
import { ROUTES } from '../../../utils/constants';

const answers = [
  { id: 1, answer: 'answer 1', user: 'Василий Тихонов' },
  { id: 2, answer: 'answer 2', user: 'Жаров Олег' },
  { id: 3, answer: 'answer 3', user: 'Егор Титов' },
];

const Answers: FC = () => {
  const { pathname } = useLocation();
  const checkboxRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [checkboxList, setCheckboxList] = useState<boolean[]>([]);
  const [compare, setCompare] = useState<{
    one: typeof answers[0] | null;
    two: typeof answers[0] | null;
  }>({ one: null, two: null });

  useEffect(() => {
    const initialArray = new Array(answers.length).fill(false);
    setCheckboxList(initialArray);
  }, []);

  // useEffect(() => {
  //   if (compare.code1 !== null && compare.code2 !== null) {
  //     setCompare({ code1: null, code2: null });
  //     navigate(`${pathname}${ROUTES.compare}`);
  //   } else {
  //     for (let index = 0; index < checkboxList.length; index++) {
  //       const isChecked = checkboxList[index];

  //       if (isChecked === true) {
  //         if (compare.code1 === null) {
  //           setCompare({ ...compare, code1: answers[index] });
  //         } else if (compare.code2 === null) {
  //           setCompare({ ...compare, code2: answers[index] });
  //         }
  //       }
  //     }
  //   }
  // }, [checkboxList]);

  const handleLabelClick = useCallback(
    (
      e: React.MouseEvent<HTMLLabelElement>,
      item: typeof answers[0],
      index: number
    ): void => {
      e.stopPropagation();

      const newArray = [...checkboxList];
      const isChecked = !checkboxList[index];
      newArray[index] = !checkboxList[index];
      console.log(checkboxList);
      console.log(newArray);

      setCheckboxList(newArray);

      console.log(isChecked);

      if (isChecked === true) {
        if (compare.one === null) {
          setCompare({ ...compare, one: item });
        } else if (compare.two === null && item.id !== compare.one.id) {
          setCompare({ ...compare, two: item });
        }

        if (compare.one !== null && compare.two !== null) {
          setCompare({ one: null, two: null });
          navigate(`${pathname}${ROUTES.compare}`);
        }
      } else {
        if (compare.one?.id === item.id) {
          setCompare({ ...compare, one: null });
        } else if (compare.two?.id === item.id) {
          setCompare({ ...compare, two: null });
        }
      }
    },
    [compare]
  );

  return (
    <section className={styles.section}>
      <BackButton />
      <SectionTitle style={{ marginBottom: 20 }}>Ответы</SectionTitle>
      <ul className={styles.list}>
        {answers.map((answer, index) => {
          return (
            <li key={answer.id} className={styles.item}>
              <Link
                className={styles.link}
                to={`${pathname}${ROUTES.answers}/${answer.id}`}
              >
                {answer.user},&emsp;процент совпадения:&ensp;75%
                <label
                  className={styles.label}
                  onClick={(e) => handleLabelClick(e, answer, index)}
                >
                  <input
                    type="checkbox"
                    className={styles.hidden}
                    ref={checkboxRef}
                  />
                  <span className={styles.custom} />
                </label>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Answers;
