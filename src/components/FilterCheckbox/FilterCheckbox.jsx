import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ checked, onChange }) => {
  return (
    <div className='filter'>
      <input
        type='checkbox'
        id='checkbox'
        checked={checked}
        onChange={onChange}
        className='filter__checkbox'
      />
      <label htmlFor='checkbox' className='filter__label'>
        Короткометражки
      </label>
    </div>
  );
};

export default FilterCheckbox;