import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarLink = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarLink.current.value,
    });
  }

  return (
    <PopupWithForm
      {...props}
      type={'avatar'}
      title={'Обновить аватар'}
      submitBtnCaption={'Сохранить'}
      onSubmit={handleSubmit}
    >
      <section class="popup__section">
        <input
          ref={avatarLink}
          id="avatar-link"
          type="url"
          name="avatar"
          class="popup__input"
          placeholder="Ссылка на аватар"
          required
          aria-label="Ссылка на аватар"
        />
        <span class="popup__input-error avatar-link-error"></span>
      </section>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
