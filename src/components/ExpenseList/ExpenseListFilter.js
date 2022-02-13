import React, { useState } from 'react';
import './ExpenseListFilter.css';

const ExpenseListFilter = (prop) => {

    const [enteredYear, setEneteredYear] = useState('');

    const filterYearHandler = (event) => {
        
        setEneteredYear(event.target.value);
        console.log(enteredYear);
        prop.onFilterYear(enteredYear);
    };


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={filterYearHandler}>
          <option value='2022' >2022</option>
          <option value='2021' >2021</option>
          <option value='2020' >2020</option>
          <option value='2019' >2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseListFilter;