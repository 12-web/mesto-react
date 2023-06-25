import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import "../index.css";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });

  // открытие попапа редактирования аватара
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  // открытие попапа редактирования профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  // открытие попапа редактирования профиля
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  // закрытие попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  // открытие попапа просмотра карточки
  function handleCardClick(card) {
    setSelectedCard({ name: card.name, link: card.link });
  }

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title="Обновить аватар"
        name="avatar"
        buttonText="Сохранить"
      >
        <input
          className="popup__input popup__input_value_avatar"
          id="avatar"
          type="url"
          name="avatar"
          placeholder="Ссылка на изображение"
          required
        />
        <span className="popup__error avatar-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title="Редактировать профиль"
        name="edit"
        buttonText="Сохранить"
      >
        <input
          className="popup__input popup__input_value_name"
          id="edit-name"
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error edit-name-error"></span>
        <input
          className="popup__input popup__input_value_profession"
          id="edit-profession"
          type="text"
          name="profession"
          placeholder="Род деятельности"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__error edit-profession-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title="Новое место"
        name="add"
        buttonText="Создать"
      >
        <input
          className="popup__input popup__input_value_name"
          id="add-name"
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__error add-name-error"></span>
        <input
          className="popup__input popup__input_value_link"
          id="add-link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error add-link-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Вы уверены?"
        name="delete-confirm"
        buttonText="Да"
      ></PopupWithForm>
    </div>
  );
}

export default App;
