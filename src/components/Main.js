function Main({ onEditProfile, onEditAvatar, onAddPlace }) {
  return (
    <main className="content">
      <section className="profile">
        <div onClick={onEditAvatar} className="profile__avatar-wrapper">
          <img className="profile__avatar" src="#" alt="аватар" />
          <div className="profile__avatar-overlay" />
        </div>
        <div className="profile__info">
          <div className="profile__row">
            <h1 className="profile__name block">Человек с длинным именем</h1>
            <button
              onClick={onEditProfile}
              type="button"
              aria-label="Редактировать профиль"
              className="profile__edit-btn btn-hover"
            />
          </div>
          <p className="profile__profession block">Исследователь океана и всего что можно</p>
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
