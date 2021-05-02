import React from 'react';
import api from '../utils/api';

function Main({ onEditProfile, onEditAvatar, onAddPlace }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log('Один из промисов отклонен', err);
      });
  });

  const listCards = cards.map((card) => (
    <li key={card._id} className="elements__element">
      <button type="button" aria-label="Удалить" className="elements__trash-btn btn-hover" />
      <div className="elements__img-wrap">
        <img src={card.link} alt={card.name} className="elements__img" />
      </div>
      <div className="elements__description">
        <h2 className="elements__text block">{card.name}</h2>
        <div className="elements__like-wrap">
          <button type="button" aria-label="Нравится" className="elements__like-btn btn-hover" />
          <span className="elements__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  ));

  return (
    <main className="content">
      <section className="profile">
        <div onClick={onEditAvatar} className="profile__avatar-wrapper">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
          <div className="profile__avatar-overlay" />
        </div>
        <div className="profile__info">
          <div className="profile__row">
            <h1 className="profile__name block">{userName}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              aria-label="Редактировать профиль"
              className="profile__edit-btn btn-hover"
            />
          </div>
          <p className="profile__profession block">{userDescription}</p>
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
