import { ModalState } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeModalState } from '../../store/action';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import MazeStart from './maze-start/maze-start';
import MazeError from './maze-error/maze-error';
import BracketsBalance from './brackets-balance/brackets-balance';

type ModalProps = {
  modalState: string;
}

export default function Modal({modalState}: ModalProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClickCloseButton = () => {
    dispatch(changeModalState(ModalState.Closed));
  };

  const handleEscPress = (evt: KeyboardEvent) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      dispatch(changeModalState(ModalState.Closed));
    }
  };

  document.addEventListener('keydown', handleEscPress);

  return (
    <FocusLock>
      <RemoveScroll enabled>
        <div className='modal is-active' >
          <div className="modal__wrapper">
            <div className="modal__overlay" onClick={() => dispatch(changeModalState(ModalState.Closed))}></div>
            {(modalState === ModalState.MazeStart)
              && <MazeStart onClick={handleClickCloseButton}/>}

            {modalState === ModalState.MazeError
              && <MazeError onClick={handleClickCloseButton}/>}

            {(modalState === ModalState.BracketsBalanceError || modalState === ModalState.BracketsBalanceSuccess)
              && <BracketsBalance onClick={handleClickCloseButton}/>}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}
