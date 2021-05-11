import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log('getUserInfo', err);
      });
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        type={'edit_profile'}
        title={'Редактировать профиль'}
        submitBtnCaption={'Сохранить'}
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

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        type={'add_card'}
        title={'Новое место'}
        submitBtnCaption={'Создать'}
      >
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

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        type={'avatar'}
        title={'Обновить аватар'}
        submitBtnCaption={'Сохранить'}
      >
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

      <PopupWithForm
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        type={'confirm'}
        title={'Вы уверены?'}
        submitBtnCaption={'Да'}
      />
    </div>
  );
}

export default App;
