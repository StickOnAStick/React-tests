import React, { useState} from "react";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import './Expense.css';

function ExpenseList (prop){

    const [filteredYear, setFilteredYear] = useState('2022');


    const filterYear = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredArray = prop.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
      <div>
        
        <Card className="expenses" >
          <ExpenseListFilter onFilterYear={filterYear} selected={filteredYear} />
          <ExpensesList items={filteredArray} />
            
        </Card>
      </div>
    );

}

export default ExpenseList;