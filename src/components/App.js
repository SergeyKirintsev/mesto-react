import logo from '../images/logo.svg';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img className="header__logo" src={logo} alt="логотип"/>
      </header>

      <main className="content">
        <section className="profile">
          <div className="profile__avatar-wrapper">
            <img className="profile__avatar" src="#" alt="аватар"/>
            <div className="profile__avatar-overlay"></div>
          </div>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__name block">Человек с длинным именем</h1>
              <button
                type="button"
                aria-label="Редактировать профиль"
                className="profile__edit-btn btn-hover"
              ></button>
            </div>
            <p className="profile__profession block">
              Исследователь океана и всего что можно
            </p>
          </div>

          <button
            type="button"
            aria-label="Добавить карточку"
            className="profile__add-btn btn-hover"
          ></button>
        </section>

        <section className="elements">
          <ul className="elements__list">
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__copyright">&copy; 2021. Киринцев Сергей</p>
      </footer>
    </div>
  );
}

export default App;
