import React, { useState } from "react";

interface RatingStarsProps {
  maxStars?: 0 | 1 | 2 | 3 | 4 | 5 | number; // Total number of stars
  isFixed ?: boolean
}

const RatingStars: React.FC<RatingStarsProps> = ({ maxStars = 5, isFixed = false }) => {
  const [rating, setRating] = useState(isFixed ? maxStars : 0);
  const [hover, setHover] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, index) => index + 1).map((star) => (
        <button
          key={star}
          type="button"
          className={`text-3xl ${
            star <= (hover || rating)
              ? "text-yellow-300" // Highlighted stars
              : "text-[#6b7280]" // Default stars
          } transition-colors duration-200`}
          onClick={() => !isFixed ? handleClick(star) : null}
          onMouseEnter={() => !isFixed ? setHover(star) : null}
          onMouseLeave={() => !isFixed ? setHover(0) : null}
        >
          {/* ★ */}
          <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path></svg>
        </button>
      ))}
    </div>
  );
};

export default RatingStars;
