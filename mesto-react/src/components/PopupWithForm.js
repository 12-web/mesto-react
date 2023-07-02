import PropTypes from 'prop-types';

const PopupWithForm = ({
  isOpen,
  onClose,
  onSubmit,
  name,
  title,
  buttonText,
  children,
}) => {
  return (
    <div className={`popup ${isOpen && 'popup_opened'} popup_type_${name}`}>
      <div className='popup__container'>
        <h2 className='popup__title'>{title}</h2>
        <button
          className='popup__close-btn btn'
          aria-label='Закрыть окно'
          type='button'
          onClick={onClose}
        />
        <form
          onSubmit={onSubmit}
          className='popup__form'
          id={name}
          action='#'
          name={name}
        >
          {children}
          <button
            className='popup__button btn'
            type='submit'
            aria-label={buttonText}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

PopupWithForm.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  children: PropTypes.node,
};

export default PopupWithForm;
