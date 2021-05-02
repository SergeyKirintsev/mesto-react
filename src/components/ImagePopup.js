function ImagePopup({ card, onClose }) {
  const copyCard = Object.assign({}, card);

  return (
    <div className={`popup popup_img_view ${card ? 'popup_is-opened' : ''}`}>
      <div className="popup__img-wrapper">
        <button onClick={onClose} type="button" className="popup__close-btn btn-hover" />
        <figure className="popup__figure">
          <img className="popup__image" src={copyCard.link} alt={copyCard.name} />
          <figcaption className="popup__caption">{copyCard.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
