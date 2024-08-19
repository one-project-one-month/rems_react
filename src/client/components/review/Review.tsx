import { useState } from "react";
import RatingReview from "./RatingReview";

const Review = () => {
  const [rating, setRating] = useState(0);
  return (
    <>
      <div>
        <RatingReview rating={rating} setRating={setRating} />
      </div>
    </>
  );
};

export default Review;
