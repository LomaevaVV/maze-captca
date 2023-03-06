import { DEFAULT_MAZE_SIZE, ModalState } from '../../../const';
import { useAppDispatch } from '../../../hooks';
import { changeMazeIsActive, changeModalState, changePathIsActive, setFinishCell, setMazePathCoord } from '../../../store/action';
import { сoordinatesOfPath } from '../../../utils';

type MazeStartProps = {
  onClick: () => void;
}

export default function MazeError({onClick}: MazeStartProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="modal__content">
      <p className="title title--h4">
        Выбранная ячейка
        <br/>
        не финишная
      </p>
      <svg
        className="modal__icon"
        width='80'
        height='78'
        aria-hidden="true"
      >
        <use xlinkHref='#icon-review-success' ></use>
      </svg>
      <div className="modal__buttons">
        <button
          autoFocus
          onClick={() => {
            const coordinatesPathArr: number[][] = сoordinatesOfPath(DEFAULT_MAZE_SIZE);
            dispatch(setMazePathCoord(coordinatesPathArr));
            dispatch(changeModalState(ModalState.Closed));
            dispatch(changeMazeIsActive(true));
            dispatch(changePathIsActive(false));
            dispatch(setFinishCell([]));
          }}
          className="btn btn--modal"
          type="button"
        >
          Начать игру заново
        </button>
      </div>
      <button onClick={onClick} className="cross-btn" type="button" aria-label="Закрыть попап">
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </div>
  );
}
