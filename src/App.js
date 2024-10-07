import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Statistics from './components/Statistics';
function App() {
  // Initialisation de l'état des dépenses à partir de localStorage (ou tableau vide par défaut)
  const [expenses, setExpenses] = useState([]);


  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/expenses');
        setExpenses(res.data);
      }catch (error) {
        console.error(error);
      }
    };
    fetchExpenses();
      }, []);


    // Fonction pour ajouter une nouvelle dépense
    const addExpense = async (expense) => {
       try {
        const res = await axios.post('http://localhost:5000/api/expenses', expense);
        setExpenses([...expenses, res.data]);
      } catch (error) {
        console.error(error);
      }
    };


  return (
    <Router>
    <div>
      <Navbar />
      <h1>Application de Gestion des Dépenses</h1>
      <ExpenseForm addExpense={addExpense} />
      <Routes>
        <Route path="/" element={<ExpenseList expenses={expenses} />} />
        <Route path="/dashboard" element={<Dashboard expenses={expenses} />} />
        <Route path="/statistics" element={<Statistics expenses={expenses} />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
