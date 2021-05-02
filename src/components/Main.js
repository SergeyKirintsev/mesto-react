function Main(props) {
  const handleEditAvatarClick = () => {
    document.querySelector('.popup_avatar').classList.add('popup_is-opened');
  }
  const handleEditProfileClick = () => {
    document.querySelector('.popup_edit_profile').classList.add('popup_is-opened');
  }

  const handleAddPlaceClick = () => {
    document.querySelector('.popup_add_card').classList.add('popup_is-opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div onClick={handleEditAvatarClick} className="profile__avatar-wrapper">
          <img className="profile__avatar" src="#" alt="аватар"/>
          <div className="profile__avatar-overlay"></div>
        </div>
        <div className="profile__info">
          <div className="profile__row">
            <h1 className="profile__name block">Человек с длинным именем</h1>
            <button
              onClick={handleEditProfileClick}
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
          onClick={handleAddPlaceClick}
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
  );
}

export default Main;