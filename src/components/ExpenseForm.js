import React, { useState } from "react";
import '../App.css'; // Assurez-vous que le CSS est importé

const ExpenseForm = ({ addExpense }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense({title, amount: parseFloat(amount), date});
        setTitle('');
        setAmount('');
        setDate('');
    }


    return (
        <form onSubmit={handleSubmit}> 
            <div>
                <label>Titre : </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
                <label>Montant : </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>

            <div>
                <label>Date : </label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <button type="submit">
                Ajouter
            </button>
        </form>
    );
};

export default ExpenseForm;
