import { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Main = ({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) => {
  const { name, about, avatar } = useContext(CurrentUserContext);

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__info'>
          <div
            className='profile__img-container profile__edit-avatar'
            onClick={onEditAvatar}
          >
            <img
              src={avatar}
              alt='Фото пользователя'
              className='profile__img'
            />
          </div>
          <div className='profile__user-info'>
            <h1 className='profile__name'>{name}</h1>
            <p className='profile__profession'>{about}</p>
            <button
              className='profile__edit-btn btn'
              id='edit-profile-btn'
              title='Редактировать профиль'
              type='button'
              onClick={onEditProfile}
            />
          </div>
        </div>
        <button
          className='profile__add-btn btn'
          id='add-card-btn'
          title='Добавить карточку'
          type='button'
          onClick={onAddPlace}
        />
      </section>
      <section className='journey'>
        <ul className='journey__list'>
          {cards.map(cardData => (
            <Card
              key={cardData._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              card={cardData}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

Main.propTypes = {
  onEditAvatar: PropTypes.func,
  onEditProfile: PropTypes.func,
  onAddPlace: PropTypes.func,
  onCardClick: PropTypes.func,
  onCardLike: PropTypes.func,
  onCardDelete: PropTypes.func,
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default Main;
