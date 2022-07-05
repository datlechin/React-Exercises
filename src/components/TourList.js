import TourItem from './TourItem';

function TourList({ tours, removeTour, fetchTours }) {
  return (
    <div className="tour-list">
      <h2>Ours Tours</h2>
      <button className="refresh" onClick={fetchTours}>
        Refresh
      </button>
      {tours.map((tour) => (
        <TourItem key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
}

export default TourList;
