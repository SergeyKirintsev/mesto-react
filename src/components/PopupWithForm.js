function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.type} ${props.isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <button onClick={props.onClose} type="button" className="popup__close-btn btn-hover" />
        <h2 className="popup__title">{props.title}</h2>
        <form name={props.type} className="popup__form" noValidate>
          {props.children}

          <button type="submit" className="popup__form-submit btn-hover">
            Сoхранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
