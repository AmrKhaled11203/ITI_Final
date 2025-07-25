import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Slider.css';

const MultiRangeSlider = ({ min = 1000, max = 5000, onChange }) => {
  const [minVal, setMinVal] = useState(1000);
  const [maxVal, setMaxVal] = useState(5000);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }

    if (onChange) {
      onChange({ min: minVal, max: maxVal });
    }
  }, [minVal, maxVal, getPercent, onChange]);

  return (
    <div className="multi-slider">
      <h4>Your Budget</h4>
      <p>Slide to indicate your budget range</p>

      <div className="slider-container">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(e) =>
            setMinVal(Math.min(+e.target.value, maxVal - 100))
          }
          className="thumb thumb--left"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(e) =>
            setMaxVal(Math.max(+e.target.value, minVal + 100))
          }
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__left-value">${minVal}</div>
          <div className="slider__right-value">${maxVal}</div>
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
