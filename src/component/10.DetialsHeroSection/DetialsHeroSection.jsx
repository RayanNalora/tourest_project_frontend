import { useState, useEffect } from "react";
import "./DetialsHeroSection.css";
import Hero from "../2.Hero/Hero";

const DetialsHeroSection = ({
  id,
  // image,
  title,
  country,
  text,
  rating,
  price,
  duration
}) => {

  const [isFav, setIsFav] = useState(false);

  // تحميل المفضلة
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFav(favs.includes(id));
  }, [id]);

  // حفظ المفضلة
  useEffect(() => {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFav) {
      if (!favs.includes(id)) favs.push(id);
    } else {
      favs = favs.filter(item => item !== id);
    }

    localStorage.setItem("favorites", JSON.stringify(favs));
  }, [isFav, id]);

  return (
    <section className="hero-details top-section">

      {/* LEFT IMAGE */}
      {/* <div className="hero-img">
        <img
          src={image}
          alt="trip"
        />
      </div> */}

      {/* RIGHT CONTENT */}
      <div className="hero-info">
          {/* زر المفضلة */}
          <button
            className={`fav-btn ${isFav ? "active" : ""}`}
            onClick={() => setIsFav(!isFav)}
          >
            {isFav ? "❤️" : "🤍"}
          </button>
        <h1> {country}</h1>
        <p>{title}</p>

        <p className="desc">
          {text}
        </p>
        <span>⭐️ {rating}</span>
        <div className="hero-meta">
          
          <span>📅 {duration}</span>
          <span>📅 Price per person {price}</span>
        </div>

      </div>
    </section>
  );
};

export default DetialsHeroSection;
