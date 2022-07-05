import { useState } from 'react';

function TourItem({ tour, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  const { id, image, info, price, name } = tour;

  const handleReadMoreClick = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="tour-item">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}{' '}
        <button className="read-more" onClick={handleReadMoreClick}>
          {readMore ? 'Show less' : 'Read more'}
        </button>
      </p>
      <button className="btn" onClick={() => removeTour(id)}>
        Not interested
      </button>
    </div>
  );
}

export default TourItem;
