import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function Header(): JSX.Element {
  return (
    <header className="">
      <div className="">
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="main-nav__link" to={AppRoute.Main}>Главная</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to={AppRoute.Maze}>Лабиринт</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to={AppRoute.BracketsBalance}>Баланс Скобок</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
