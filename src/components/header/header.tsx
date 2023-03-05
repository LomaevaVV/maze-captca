import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function Header(): JSX.Element {
  return (
    <header className="page-header">
      <div className="page-header__wrapper wrapper">
        <nav className="page-header__navigation navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link className="navigation__link" to={AppRoute.Main}>Главная</Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to={AppRoute.Maze}>Лабиринт</Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to={AppRoute.BracketsBalance}>Баланс Скобок</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
