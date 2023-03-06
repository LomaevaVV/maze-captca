import { ModalState } from '../../../const';

type BracketsBalanceProps = {
  onClick: () => void;
  modalState: string;
}

export default function BracketsBalance({onClick, modalState}: BracketsBalanceProps): JSX.Element {

  return (
    <div className="modal__content">
      {modalState === ModalState.BracketsBalanceSuccess
        ?
        <p className="title title--h4 title--success">
            Баланс скобок соблюден
        </p>
        :
        <p className="title title--h4 title--error">
            Баланс скобок не соблюден
        </p>}
      <svg
        className="modal__icon"
        width='80'
        height='78'
        aria-hidden="true"
      >
        <use xlinkHref='#icon-review-success' ></use>
      </svg>
      <button
        onClick={onClick}
        className="cross-btn"
        type="button"
        aria-label="Закрыть попап"
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </div>
  );
}
