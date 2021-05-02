import React from 'react';

function Card({ card }) {
  return (
    <li className="elements__element">
      <button type="button" aria-label="Удалить" className="elements__trash-btn btn-hover" />
      <div className="elements__img-wrap">
        <img src={card.link} alt={card.name} className="elements__img" />
      </div>
      <div className="elements__description">
        <h2 className="elements__text block">{card.name}</h2>
        <div className="elements__like-wrap">
          <button type="button" aria-label="Нравится" className="elements__like-btn btn-hover" />
          <span className="elements__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
