import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseListFilter from "./ExpenseListFilter";
import Card from "../UI/Card";
import './Expense.css';

function ExpenseList (prop){

    const filterYearHandler = (selectedYear) => {
      console.log(selectedYear);
    };

    return (
      <div>
        <ExpenseListFilter onFilterYear={filterYearHandler}/>
        <Card className="expenses" >
            <ExpenseItem 
                title={prop.expenses[0].title}
                amount={prop.expenses[0].amount}
                date={prop.expenses[0].date}
            />
            <ExpenseItem 
              title={prop.expenses[1].title}
              amount={prop.expenses[1].amount}
              date={prop.expenses[1].date}
            />
            <ExpenseItem
              title={prop.expenses[2].title}
              amount={prop.expenses[2].amount}
              date={prop.expenses[2].date}
            />
            <ExpenseItem
              title={prop.expenses[3].title}
              amount={prop.expenses[3].amount}
              date={prop.expenses[3].date}
            />
        </Card>
      </div>
    );

}

export default ExpenseList;