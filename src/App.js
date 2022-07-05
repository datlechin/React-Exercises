import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import TourList from './components/TourList';
import './App.css';

const apiUrl = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(apiUrl);
    const tours = await response.json();
    setTours(tours);
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="App">
      <TourList tours={tours} removeTour={removeTour} fetchTours={fetchTours} />
    </div>
  );
}

export default App;
