import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInformation(), api.getInitialCards()])
      .then(([userData, cardsList]) => {
        // получение информации о пользователе
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        // получение карточек
        setCards(cardsList);
      })
      .catch((err) => { console.log(err) });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__img-container profile__edit-avatar" onClick={props.onEditAvatar}>
            <img
            src={userAvatar}
            alt="Фото пользователя"
            className="profile__img"
            />
          </div>
          <div className="profile__user-info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__profession">{userDescription}</p>
            <button
              className="profile__edit-btn btn"
              id="edit-profile-btn"
              title="Редактировать профиль"
              type="button"
              onClick={props.onEditProfile}
              >
            </button>
          </div>
        </div>
        <button
          className="profile__add-btn btn"
          id="add-card-btn"
          title="Добавить карточку"
          type="button"
          onClick={props.onAddPlace}
          >
        </button>
      </section>
      <section className="journey">
        <ul className="journey__list">
          {
            cards.map((cardData, i) => (
              <Card
                key={i}
                onCardClick={props.onCardClick}
                card={cardData}
              />
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
