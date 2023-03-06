import { Link } from 'react-router-dom';
import { AppRoute, ModalState } from '../../const';
import { useAppDispatch } from '../../hooks/index';
import { changeModalState } from '../../store/action';

type HeaderProps = {
  page: string;
}

export default function Header({page}: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <header className="page-header">
      <div className="page-header__wrapper wrapper">
        <nav className="page-header__navigation navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                className={`navigation__link ${page === AppRoute.Main ? 'is_active' : ''}`}
                to={AppRoute.Main}
              >
                Главная
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                className={`navigation__link ${page === AppRoute.Maze ? 'is_active' : ''}`}
                to={AppRoute.Maze}
                onClick={() => dispatch(changeModalState(ModalState.MazeStart))}
              >
                Лабиринт
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                className={`navigation__link ${page === AppRoute.BracketsBalance ? 'is_active' : ''}`}
                to={AppRoute.BracketsBalance}
              >
                Баланс Скобок
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
