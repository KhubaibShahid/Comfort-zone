// components/PriceRangeSlider.js
import React, { useState } from 'react';

const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const handleMinChange = (event : any) => {
    const value = Math.min(event.target.value, maxPrice);
    setMinPrice(value);
  };

  const handleMaxChange = (event : any) => {
    const value = Math.max(event.target.value, minPrice);
    setMaxPrice(value);
  };

  return (
    <div>
      <div className='mb-5'>
        <label className='text-sm'>
          Min Price: ${minPrice}
          </label>
          <input
          className='mt-3'
            type="range"
            min="0"
            max="2000"
            value={minPrice}
            onChange={handleMinChange}
          />
      </div>
      <div>
        <label className='text-sm'>
          Max Price: ${maxPrice}
          </label>
          <input
          className='mt-3'
            type="range"
            min="0"
            max="2000"
            value={maxPrice}
            onChange={handleMaxChange}
          />
      </div>
      <div>
        <h3 className='text-sm mt-5'>Selected Range: <br /> ${minPrice} - ${maxPrice}</h3>
      </div>
    </div>
  );
};

export default PriceRangeSlider;