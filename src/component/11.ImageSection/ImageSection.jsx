import React, { useState } from "react";
import "./ImageSection.css";

const ImageSection = ({ title, images }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="image-section">
      {title && <h2>{title}</h2>}

      {/* 🔹 العرض المصغّر (4 صور فقط) */}
      {!showAll && (
        <div className="preview-grid">
          {images.slice(0, 4).map((img, i) => (
            <img key={i} src={img} alt={`img-${i}`} />
          ))}

          <button className="show-all-btn" onClick={() => setShowAll(true)}>
            View All
          </button>
        </div>
      )}

      {/* 🔹 عرض كل الصور */}
      {showAll && (
        <div>
          <div className="full-grid">
            {images.map((img, i) => (
              <img key={i} src={img} alt={`img-${i}`} />
            ))}
          </div>

          <button className="show-less-btn" onClick={() => setShowAll(false)}>
           close
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageSection;
