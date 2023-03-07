import { ChangeEvent, useState } from 'react';
import { ModalState } from '../../../const';
import { useAppDispatch } from '../../../hooks';
import { changeMazeIsActive, changeModalState, changePathIsActive, setFinishCell, setMazePathCoord, setMazeSize } from '../../../store/action';
import { сoordinatesOfPath } from '../../../utils';

type MazeStartProps = {
  onClick: () => void;
}

export default function MazeStart({onClick}: MazeStartProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [inputData, setInputData] = useState(3);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    evt.preventDefault();
    const {value} = evt.target;

    setInputData(Number(value));
  };

  return (
    <div className="modal__content">
      <p className="title title--h4">
        Начать игру
      </p>
      <div className="modal__inputs">
        <label className='modal__input input--label' htmlFor="mazeSize">Размер стороны лабиринта</label>
        <input
          onChange={handleInputChange}
          className='modal__input input'
          type="number" id="mazeSize"
          value={inputData} min="1" max="10"
          placeholder='3'
          aria-label="Размер стороны лабиринта"
        />
      </div>
      <div className="modal__buttons">
        <button
          autoFocus
          onClick={() => {
            const coordinatesPathArr: number[][] = сoordinatesOfPath(inputData);
            dispatch(setMazePathCoord(coordinatesPathArr));
            dispatch(changeModalState(ModalState.Closed));
            dispatch(changeMazeIsActive(true));
            dispatch(changePathIsActive(false));
            dispatch(setFinishCell([]));
            dispatch(setMazeSize(inputData));
          }}
          className="btn btn--modal"
          type="button"
        >
          Начать игру
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
