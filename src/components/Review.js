import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Review({
  review,
  handlePrevClick,
  handleNextClick,
  handleRandomClick,
}) {
  const { id, image, job, name, text } = review;

  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={handlePrevClick} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={handleNextClick} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={handleRandomClick} className="random-btn">
        Random review
      </button>
    </div>
  );
}

export default Review;
