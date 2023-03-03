import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function MainPage(): JSX.Element {

  return (
    <div className="">
      <main className="">
        <div className="">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="main-nav__link" to={AppRoute.Maze}>Лабиринт</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to={AppRoute.BracketsBalance}>Баланс Скобок</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
