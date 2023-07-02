import { useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const EditAvatarPopup = ({
  isOpen,
  onClose,
  onUpdateAvatar,
  isFormLoading,
}) => {
  const avatar = useRef();
  const userAvatar = useContext(CurrentUserContext);

  /** изменение аватара пользователя */
  const handleSubmit = e => {
    e.preventDefault();
    onUpdateAvatar(avatar.current.value);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title='Обновить аватар'
      name='avatar'
      buttonText={isFormLoading ? 'Сохранение...' : 'Сохранить'}
    >
      <input
        ref={avatar}
        defaultValue={userAvatar.avatar}
        className='popup__input popup__input_value_avatar'
        id='avatar'
        type='url'
        name='avatar'
        placeholder='Ссылка на изображение'
        required
      />
      <span className='popup__error avatar-error'></span>
    </PopupWithForm>
  );
};

EditAvatarPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onUpdateAvatar: PropTypes.func,
  isFormLoading: PropTypes.bool,
};

export default EditAvatarPopup;
