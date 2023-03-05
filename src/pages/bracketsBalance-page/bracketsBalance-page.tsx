import React from 'react';
import Header from '../../components/header/header';

export default function BracketsBalance(): JSX.Element {

  return (
    <React.Fragment>
      <Header />

      <main className="page-main">
        <div className="page-main__wrapper wrapper">
          <section className="page-main-brackets-balance brackets-balance">
            <h1 className="brackets-balance__title title">Баланс скобок в тексте</h1>
            <form
              className="brackets-balance__form form"
              action="#"
            >
              <textarea
                className="form__textarea"
                placeholder="Введите любой текст"
                required
              />
              <button
                className="form__button button"
                type="submit"
              >
                Проверить
              </button>
            </form>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}
