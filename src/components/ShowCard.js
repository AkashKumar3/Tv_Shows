import React from 'react';
import Button from './Button';


const ShowCard = ({ show, onButtonClick }) => {
  const { name, rating, language, status, image } = show;

  return (
    <div className="show-card">
      {image && <img src={image.medium} alt={name} className="show-card__image" />}
      <div className="show-card__content">
        <h5 className="show-card__title">{name}</h5>
        <p className="show-card__rating">Rating: {rating && rating.average}</p>
        <p className="show-card__language">Language: {language}</p>
        <p className="show-card__language">Genres: {show.genres.join(', ')}</p>
        <p className="show-card__status">Status: {status}</p>
       
        <Button onClick={onButtonClick}>Show Details</Button>
      </div>
    </div>
  );
};

export default ShowCard;
