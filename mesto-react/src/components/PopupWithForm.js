import React from "react";

function PopupWithForm({ isOpen, onClose, name, title, buttonText, children }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"} popup_type_${name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button
          className="popup__close-btn btn"
          title="Закрыть окно"
          type="button"
          onClick={onClose}
        />
        <form className="popup__form" id={name} action="#" name={name}>
          {children}
          <button className="popup__button btn" type="submit" title="Сохранить">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
