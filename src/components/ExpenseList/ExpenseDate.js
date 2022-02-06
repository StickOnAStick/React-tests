import React from "react";
import './ExpenseDate.css';

function ExpenseDate (prop){

    const month = prop.date.toLocaleString('en-US', {month: 'long'});
    const date = prop.date.toLocaleString('en-US', { day: '2-digit' });
    const year = prop.date.getFullYear();

    return (
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{date}</div>
            </div>
       
    );
}

export default ExpenseDate;