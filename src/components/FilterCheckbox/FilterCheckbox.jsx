import React, { useState } from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ onFilter }) => {
  const [shorts, setShorts] = useState(true);
  return (
    <div className='filter'>
      <input
        type='checkbox'
        id='checkbox'
        className='filter__checkbox'
        onChange={() => { setShorts(!shorts) }}
        checked={shorts}
      />
      <label htmlFor='checkbox' className='filter__label'>
        Короткометражки
      </label>
    </div>
  );
};

export default FilterCheckbox;