function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-btn btn-hover"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form name={props.name} className="popup__form" noValidate>

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