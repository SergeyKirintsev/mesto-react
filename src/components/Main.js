import React from 'react';
import api from '../utils/api';

function Main({ onEditProfile, onEditAvatar, onAddPlace }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log('Один из промисов отклонен', err);
      });
  });

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
        <ul className="elements__list" />
      </section>
    </main>
  );
}

export default Main;
