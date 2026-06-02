import { useNavigate } from "react-router-dom";
import "./TripsContainer.css";
import { useState } from "react";

const TripsContainer = ({ data }) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate()

  const next = () => {
    if (index < data.length - 3) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="trips-section">

      <button className="arrow left" onClick={prev}>❮</button>

      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 33.33}%)` }}
        >
          {data.map((item) => (
            <div key={item.id} className="trip-card" onClick={() => {
              navigate(`/tripdetails/${item.id}`)
            }}>
              <div className="image-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="trip-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={next}>❯</button>

    </section>
  );
};

export default TripsContainer;
