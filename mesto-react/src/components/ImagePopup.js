function ImagePopup(props) {

  return (
    <div className={`popup ${props.card && 'popup_opened'} popup_type_show`}>
      <div className="popup__show-content">
        <button
          className="popup__close-btn btn"
          type="button"
          title="Закрыть окно"
          onClick={props.onClose}
          >
        </button>
        <figure className="popup__img-container">
          <img
            className="popup__img"
            src={props.card ? props.card.link : ''}
            alt={props.card ? props.card.name : ''}
          />
          <figcaption className="popup__caption">{props.card ? props.card.name : ''}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
