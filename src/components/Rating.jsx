/* eslint-disable react/prop-types */
import { useState } from 'react';

function Rating({ ratingState }) {
  const [selected, setSelected] = useState(7);

  const handleSelect = e => {
    setSelected(+e.currentTarget.value);
    ratingState(+e.currentTarget.value);
  };
  return (
    <>
      <ul className="rating">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num, i) => {
          return (
            <li key={i}>
              <input
                type="radio"
                id={`num${num}`}
                name="rating"
                value={num}
                onChange={handleSelect}
                checked={selected === num}
              />
              <label htmlFor={`num${num}`}>{num}</label>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Rating;
