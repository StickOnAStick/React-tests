import React, { useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseListFilter from "./ExpenseListFilter";
import Card from "../UI/Card";
import './Expense.css';

function ExpenseList (prop){

    const [filteredYear, setFilteredYear] = useState('2022');


    const filterYear = selectedYear => {
      setFilteredYear(selectedYear);
    };

    return (
      <div>
        
        <Card className="expenses" >
          <ExpenseListFilter onFilterYear={filterYear} selected={filteredYear} />
            {prop.expenses.map((expense) => (
                <ExpenseItem 
                  title={expense.title} 
                  amount={expense.amount} 
                  date={expense.date}
                />
            ))}
        </Card>
      </div>
    );

}

export default ExpenseList;