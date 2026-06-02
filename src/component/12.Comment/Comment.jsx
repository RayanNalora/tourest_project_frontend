import { useParams } from "react-router-dom";
import "./Comment.css";
import { useEffect, useState } from "react";

const Comment = () => {
  const { id } = useParams();

  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(0);

  // GET COMMENTS
  useEffect(() => {
    fetch(`http://localhost:5000/api/comments/${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data || []))
      .catch((err) => console.log(err));
  }, [id]);

  // ADD COMMENT
  const handleAddComment = async (e) => {
    e.preventDefault();

    if (!name || !text || !rating) return;

    const newComment = {
      tripId: id,
      userName: name,
      comment: text,
      rating: rating,
    };

    const res = await fetch("http://localhost:5000/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });

    const data = await res.json();

    setComments((prev) => [...prev, data]);
    setName("");
    setText("");
    setRating(null);
    setHover(0);
  };

  return (
    <div className="review-wrapper">

      {/* LEFT SIDE - COMMENTS */}
      <div className="review-left">
        <h2>Visitor Reviews ({comments.length})</h2>

        {comments.slice(0, 5).map((review) => (
          <div className="review-card" key={review.id}>

            <div className="review-top">
              <div className="avatar">
                {review.userName?.charAt(0)?.toUpperCase()}
              </div>

              <div>
                <h4>{review.userName}</h4>
                <small>{review.createdAt}</small>
              </div>
            </div>

            <div className="stars-display">
              {"⭐️".repeat(review.rating)}
            </div>

            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="review-right">

        <h2>Leave a Review</h2>

        <form onSubmit={handleAddComment}>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Write your experience..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* STARS */}
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                style={{
                  cursor: "pointer",
                  fontSize: "26px",
                  color: star <= (hover || rating) ? "#FFD700" : "#ccc",
                }}
              >
                ★
              </span>
            ))}
          </div>

          {!rating && (
            <p className="error">Please select rating ⭐️</p>
          )}

          <button type="submit">Submit Review</button>

        </form>
      </div>

    </div>
  );
};

export default Comment;
