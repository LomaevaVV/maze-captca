import React, { ChangeEvent, useState } from 'react';
import Header from '../../components/header/header';
import Modal from '../../components/modal/modal';
import { AppRoute, ModalState } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeModalState } from '../../store/action';
import { isBalanced } from '../../utils';

export default function BracketsBalance(): JSX.Element {
  const dispatch = useAppDispatch();
  const [textareaData, setTextareaData] = useState('');

  const modalState = useAppSelector((state) => state.modalState);

  const onSubmitClickHandler = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    window.console.log(textareaData);
    window.console.log(isBalanced(textareaData));
    isBalanced(textareaData)
      ? dispatch(changeModalState(ModalState.BracketsBalanceSuccess))
      : dispatch(changeModalState(ModalState.BracketsBalanceError));
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    evt.preventDefault();
    const {value} = evt.target;

    setTextareaData(value);
  };

  return (
    <React.Fragment>
      <Header page={AppRoute.BracketsBalance}/>

      <main className="page-main">
        <div className="page-main__wrapper wrapper">
          <section className="page-main__brackets-balance brackets-balance">
            <h1 className="brackets-balance__title title">Баланс скобок в тексте</h1>
            <form
              className="brackets-balance__form form"
              action="#"
            >
              <textarea
                className="form__textarea"
                placeholder="Введите любой текст"
                onChange={handleInputChange}
                required
              />
              <button
                className="form__button button"
                type="submit"
                onClick={(evt) => onSubmitClickHandler(evt)}
              >
                Проверить
              </button>
            </form>
          </section>
        </div>
        {modalState !== ModalState.Closed && <Modal modalState={modalState}/>}
      </main>
    </React.Fragment>
  );
}
