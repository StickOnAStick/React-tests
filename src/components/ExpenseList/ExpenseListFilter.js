import React, { useState } from 'react';

import './ExpenseListFilter.css';

const ExpenseListFilter = (prop) => {

    const [enteredYear, setEneteredYear] = useState('');

    const filterYearHandler = (event) => {
        
        console.log(event);
        setEneteredYear('Year changed');
        prop.filterYearHandler(enteredYear);
    };


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select>
          <option value='2022' onChange={filterYearHandler}>2022</option>
          <option value='2021' onChange={filterYearHandler}>2021</option>
          <option value='2020' onChange={filterYearHandler}>2020</option>
          <option value='2019' onChange={filterYearHandler}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseListFilter;