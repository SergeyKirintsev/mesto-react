import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_edit_profile">
        <div className="popup__container">
          <button type="button" className="popup__close-btn btn-hover"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form name="edit-profile" className="popup__form" noValidate>
            <section className="popup__section">
              <input
                id="name-profile"
                type="text"
                name="name"
                className="popup__input popup__input_type_name"
                value=""
                placeholder="Имя"
                required
                minLength="2"
                maxLength="40"
                aria-label="Имя"
              />
              <span className="popup__input-error name-profile-error"></span>
            </section>
            <section className="popup__section">
              <input
                id="job-profile"
                type="text"
                name="about"
                className="popup__input popup__input_type_job"
                value=""
                placeholder="Увлечение/работа"
                required
                minLength="2"
                maxLength="200"
                aria-label="О себе"
              />
              <span className="popup__input-error job-profile-error"></span>
            </section>
            <button type="submit" className="popup__form-submit btn-hover">
              Сoхранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_add_card">
        <div className="popup__container">
          <button type="button" className="popup__close-btn btn-hover"></button>
          <h2 className="popup__title">Новое место</h2>
          <form name="add-card" className="popup__form" noValidate>
            <section className="popup__section">
              <input
                id="card-name"
                type="text"
                name="name"
                className="popup__input popup__input_type_img-name"
                value=""
                placeholder="Название"
                required
                minLength="2"
                maxLength="30"
                aria-label="Имя"
              />
              <span className="popup__input-error card-name-error"></span>
            </section>
            <section className="popup__section">
              <input
                id="card-link"
                type="url"
                name="link"
                className="popup__input popup__input_type_img-link"
                value=""
                placeholder="Ссылка на картинку"
                required
                aria-label="Ссылка на картинку"
              />
              <span className="popup__input-error card-link-error"></span>
            </section>
            <button type="submit" className="popup__form-submit btn-hover">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_avatar">
        <div className="popup__container">
          <button type="button" className="popup__close-btn btn-hover"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="avatar" className="popup__form" noValidate>
            <section className="popup__section">
              <input
                id="avatar-link"
                type="url"
                name="avatar"
                className="popup__input"
                value=""
                placeholder="Ссылка на аватар"
                required
                aria-label="Ссылка на аватар"
              />
              <span className="popup__input-error avatar-link-error"></span>
            </section>
            <button type="submit" className="popup__form-submit btn-hover">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_confirm">
        <div className="popup__container">
          <button type="button" className="popup__close-btn btn-hover"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form name="confirm" className="popup__form" noValidate>
            <button type="submit" className="popup__form-submit btn-hover">
              Да
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
