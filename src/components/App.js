import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />

      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        type={'edit_profile'}
        title={'Редактировать профиль'}
      >
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
          <span className="popup__input-error name-profile-error" />
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
          <span className="popup__input-error job-profile-error" />
        </section>
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} type={'add_card'} title={'Новое место'}>
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
      </PopupWithForm>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} type={'avatar'} title={'Обновить аватар'}>
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
      </PopupWithForm>

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
