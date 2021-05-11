import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log('getCards', err);
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  const listCards = cards.map((card) => (
    <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} />
  ));

  return (
    <main className="content">
      <section className="profile">
        <div onClick={onEditAvatar} className="profile__avatar-wrapper">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          />
          <div className="profile__avatar-overlay" />
        </div>
        <div className="profile__info">
          <div className="profile__row">
            <h1 className="profile__name block">{currentUser.name}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              aria-label="Редактировать профиль"
              className="profile__edit-btn btn-hover"
            />
          </div>
          <p className="profile__profession block">{currentUser.about}</p>
        </div>

        <button
          onClick={onAddPlace}
          type="button"
          aria-label="Добавить карточку"
          className="profile__add-btn btn-hover"
        />
      </section>

      <section className="elements">
        <ul className="elements__list">{listCards}</ul>
      </section>
    </main>
  );
}

export default Main;
