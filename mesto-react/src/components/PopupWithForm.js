import React from 'react';

function PopupWithForm(props) {

  return (
    <div className={`popup ${props.isOpen && 'popup_opened'} popup_type_${props.name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <button
          className="popup__close-btn btn"
          title="Закрыть окно"
          type="button"
          onClick={props.onClose}
          >
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default PopupWithForm;
