function ImagePopup(props) {
  return (
    <div className="popup popup_img_view">
      <div className="popup__img-wrapper">
        <button type="button" className="popup__close-btn btn-hover"></button>
        <figure className="popup__figure">
          <img
            className="popup__image"
            src="https://images.unsplash.com/photo-1612470858098-500d3550778e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
            alt="alt"
          />
          <figcaption className="popup__caption">caption</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;