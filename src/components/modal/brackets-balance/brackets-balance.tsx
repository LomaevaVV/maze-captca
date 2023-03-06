type BracketsBalanceProps = {
  onClick: () => void;
}

export default function BracketsBalance({onClick}: BracketsBalanceProps): JSX.Element {

  return (
    <div className="modal__content">
      <p className="title title--h4">
        Баланс скобок соблюден
      </p>
      <svg
        className="modal__icon"
        width='80'
        height='78'
        aria-hidden="true"
      >
        <use xlinkHref='#icon-review-success' ></use>
      </svg>
      <button onClick={onClick} className="cross-btn" type="button" aria-label="Закрыть попап">
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </div>
  );
}
