import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser, isFormLoading }) => {
  const [userData, setUserData] = useState({ name: '', about: '' });
  const currentUser = useContext(CurrentUserContext);

  /**
   * добавление данных пользователя при загрузке страницы
   */
  useEffect(() => {
    setUserData({
      name: currentUser.name,
      about: currentUser.about,
    });
  }, [currentUser, isOpen]);

  /**
   * функция отправки формы при которой обновляются данные в профиле
   */
  const handleSubmit = e => {
    e.preventDefault();
    onUpdateUser(userData);
  };

  /**
   * функция получения данных из формы
   */
  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      title='Редактировать профиль'
      name='edit'
      buttonText={isFormLoading ? 'Сохранение...' : 'Сохранить'}
    >
      <input
        className='popup__input popup__input_value_name'
        id='edit-name'
        type='text'
        name='name'
        placeholder='Имя'
        minLength='2'
        maxLength='40'
        value={userData.name}
        onChange={handleChange}
        required
      />
      <span className='popup__error edit-name-error'></span>
      <input
        className='popup__input popup__input_value_profession'
        id='edit-profession'
        type='text'
        name='about'
        placeholder='Род деятельности'
        minLength='2'
        maxLength='200'
        value={userData.about}
        onChange={handleChange}
        required
      />
      <span className='popup__error edit-name-error'></span>
    </PopupWithForm>
  );
};

EditProfilePopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onUpdateUser: PropTypes.func,
  isFormLoading: PropTypes.bool,
};

export default EditProfilePopup;
