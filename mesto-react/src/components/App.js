import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

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
    setSelectedCard();
  }

  // открытие попапа просмотра карточки
  function handleCardClick(card) {
    setSelectedCard(card);
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
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title="Обновить аватар"
        name="avatar"
        >
        <form
          className="popup__form"
          id="edit-avatar"
          action="#"
          name="avatar"
          noValidate
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
          <button
            className="popup__button btn"
            type="submit"
            title="Сохранить">
            Сохранить
          </button>
        </form>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title="Редактировать профиль"
        name="edit">
        <form
          className="popup__form"
          id="edit-profile"
          action="#"
          name="user_information"
          noValidate
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
          <button
            className="popup__button btn"
            type="submit"
            title="Сохранить">
            Сохранить
          </button>
        </form>
      </PopupWithForm>
      <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title="Новое место"
          name="add">
        <form
          className="popup__form"
          id="add-card"
          action="#"
          name="card-information"
          noValidate
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
          <button
            className="popup__button btn"
            type="submit"
            title="Сохранить">
            Создать
          </button>
        </form>
      </PopupWithForm>
      <PopupWithForm
        title="Вы уверены?"
        name="delete-confirm"
      >
        <form
            className="popup__form"
            id="delete-confirm"
            action="#"
            name="delete_confirm"
            noValidate
            >
            <button
              className="popup__button btn"
              type="submit"
              title="Да">
              Да
            </button>
          </form>
      </PopupWithForm>
    </div>
  );
}

export default App;
