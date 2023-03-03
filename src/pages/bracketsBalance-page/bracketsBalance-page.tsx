import Header from '../../components/header/header';

export default function BracketsBalance(): JSX.Element {

  return (
    <div className="">
      <Header />

      <main className="">
        <div className="">
          <section className="">
            <h1 className="brackets-balance__title">Проверка баланса скобок в тексте</h1>
            <form
              className="brackets-balance__form form"
              action="#"
            >
              <div className="brackets-balance-wrapper form__input-wrapper">
                <input
                  className="brackets-balance form__input"
                  type="text"
                  placeholder="Введите любой текст"
                  required
                />
              </div>
              <button
                className="brackets-balance__submit form__submit button"
                type="submit"
              >
                Проверить
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
