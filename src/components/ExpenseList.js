import React from 'react';
import '../App.css'; // Assurez-vous que le CSS est importé

const ExpenseList = ({ expenses }) => {
    return (
        <div>
            <h2>Liste des Dépenses</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        {expense.title} - {expense.amount}$ - {expense.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
