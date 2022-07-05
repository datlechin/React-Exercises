import { useState } from 'react';
import Review from './components/Review';
import reviews from './data';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    } else if (number < 0) {
      return reviews.length - 1;
    }

    return number;
  };

  const handlePrevClick = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const handleNextClick = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const handleRandomClick = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline" />
        </div>
        <Review
          review={reviews[index]}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          handleRandomClick={handleRandomClick}
        />
      </div>
    </div>
  );
}

export default App;
