import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import "bootstrap/dist/css/bootstrap.min.css";
import ExpensesPage from './pages/ExpensesPage';
import ExpensePage from './pages/ExpensePage';
import "./App.css";

export const ExpenseContext = createContext();

function RedirectToExpenses() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate('/expenses');
  }, [navigate]);

  return null;
}

function App() {
  const [expenses, setExpenses] = useState([]);
  const [savedExpenses, setSavedExpenses] = useState([]);

  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setSavedExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(savedExpenses));
  }, [savedExpenses]);

  const deleteSavedExpense = (index) => {
    setSavedExpenses(savedExpenses.filter((_, i) => i !== index));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses, savedExpenses, setSavedExpenses, deleteSavedExpense }}>
      <Router>
        <Routes>
          <Route path='/' element={<RedirectToExpenses />} />
          <Route path='/expenses' element={<ExpensesPage />} />
          <Route path='/expense/:id' element={<ExpensePage />} />
        </Routes>
      </Router>
    </ExpenseContext.Provider>
  );
}

export default App;
