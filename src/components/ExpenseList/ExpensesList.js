import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = prop => {
    let expensesContent = <p>No Expenses Found!</p>;
    
    if(prop.expenses.length === 0){
        return 
    }

    return <ul className="expenses-list">
        {
        prop.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />))
        }   
    </ul>
};

export default ExpensesList;