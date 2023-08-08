import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ onFilter }) => {
  return (
    <div className='filter'>
      <input
        type='checkbox'
        id='checkbox'
        className='filter__checkbox'
        onChange={onFilter}
        checked={true}
      />
      <label htmlFor='checkbox' className='filter__label'>
        Короткометражки
      </label>
    </div>
  );
};

export default FilterCheckbox;