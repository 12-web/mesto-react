function Card({ onCardClick, card }) {
  // открытие попапа просмтора карточки
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="journey__item">
      <button
        type="button"
        className="journey__img-btn btn"
        title="Посмотреть фото"
        onClick={handleClick}
      >
        <img className="journey__img" src={card.link} alt={card.name} />
      </button>
      <button
        type="button"
        className="journey__delete-btn btn"
        title="Удалить"
      ></button>
      <div className="journey__description">
        <h2 className="journey__title">{card.name}</h2>
        <div className="journey__like-container">
          <button
            type="button"
            className="journey__like-btn btn"
            title="Оценить"
          ></button>
          <span className="journey__like-digit">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
