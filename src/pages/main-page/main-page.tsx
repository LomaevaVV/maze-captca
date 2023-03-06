import React from 'react';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';

export default function MainPage(): JSX.Element {

  return (
    <React.Fragment>
      <Header page={AppRoute.Main}/>

      <main className="page-main">
        <div className="page-main__wrapper wrapper">
          <h1 className="visually-hidden">Главная страница</h1>
          <p className="page-main__about-me">
            Добрый день!
          </p>
          <p className="page-main__about-me">
            У меня огромный опыт в ИТ в качестве аналитика/тим-лида аналитики (подробнее:

            <a href='https://hh.ru/resume/a73f4e05ff0bbe65bb0039ed1f4256614f7574'>  резюме Системный аналитик</a>
            )
          </p>
          <p className="page-main__about-me">
            Пару лет назад я решилась на резкий поворот в своей карьере и успешно освоила профессию React-разработчик от HTML-Академии.
          </p>
          <p className="page-main__about-me">
            Более года занимаюсь проектной деятельностью в качестве Frontend-разработчика с использованием следующих технологий: JS, TypeScript & React, Redux, Axios, Leaflet, HTML + CSS.
          </p>
          <p className="page-main__about-me">
            Опыт в ИТ, зрелость и коммуникабельность позволят легко влиться в команду и нести ответственность за задачи и решение различным технических и коммуникационных проблем, возникающих в процессе работы.
          </p>
          <p className="page-main__about-me">
            Жду вашего отклика!<br />
            Валентина
          </p>
          <ul className="page-main__products products">
            <li className="products__item">
              <a className="products__link" href='https://hh.ru/resume/f72dc899ff0bbe64890039ed1f767978723952'>Резюме</a>
            </li>
            <li className="products__item">
              <a className="products__link" href='https://github.com/LomaevaVV'>Git</a>
            </li>
          </ul>
        </div>
      </main>
    </React.Fragment>
  );
}
