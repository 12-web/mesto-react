import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = ({ onClose, isOpen, onAddPlace, isFormLoading }) => {
  const [cardData, setCardData] = useState({ title: '', link: '' });

  /** создание новой карточки */
  const handleSubmit = e => {
    e.preventDefault();
    onAddPlace(cardData);
  };

  /** получение данных из формы */
  const handleChange = e => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  /** обнуление данных формы при открытии модального окна */
  useEffect(() => {
    setCardData({ title: '', link: '' });
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title='Новое место'
      name='add'
      buttonText={isFormLoading ? 'Секундочку...' : 'Создать'}
    >
      <input
        value={cardData.title}
        onChange={handleChange}
        className='popup__input popup__input_value_name'
        id='add-name'
        type='text'
        name='title'
        placeholder='Название'
        minLength='2'
        maxLength='30'
        required
      />
      <span className='popup__error add-name-error'></span>
      <input
        value={cardData.link}
        onChange={handleChange}
        className='popup__input popup__input_value_link'
        id='add-link'
        type='url'
        name='link'
        placeholder='Ссылка на картинку'
        required
      />
      <span className='popup__error add-link-error'></span>
    </PopupWithForm>
  );
};

AddPlacePopup.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  onAddPlace: PropTypes.func,
  isFormLoading: PropTypes.bool,
};

export default AddPlacePopup;
