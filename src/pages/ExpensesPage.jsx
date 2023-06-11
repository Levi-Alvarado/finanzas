import { useContext, useState } from "react";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { Link } from "react-router-dom";
import { ExpenseContext } from "../App";

export default function ExpensesPage() {
    const { expenses, setExpenses, savedExpenses, setSavedExpenses, deleteSavedExpense } = useContext(ExpenseContext);
    const [expenseTitle, setExpenseTitle] = useState("")
    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
      };
    
      const deleteExpense = (index) => {
        setExpenses(expenses.filter((_, i) => i !== index));
      };
    
      const getTotalExpenses = () => {
        return expenses.reduce((total, expense) => total + Number(expense.amount), 0);
      };

      const handleClick = () => {
        if (expenseTitle.length === 0) return alert("Pon un nombre al gasto")

        setSavedExpenses([...savedExpenses, {title: expenseTitle, expenses: [...expenses]}])
        setExpenses([])
        setExpenseTitle("")
      }

    return (<Container>
      <Row>
        <Col md={4}>
          <Card className="text-center">
            <Card.Header>Ingreso de Datos</Card.Header>
            <Card.Body>
              <ExpenseForm addExpense={addExpense} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Header>Cantidades y Categorías</Card.Header>
            <Card.Body>
              <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Header>Total gastado</Card.Header>
            <Card.Body>
              <Card.Text>{getTotalExpenses()}</Card.Text>
              <div className="form-group">
                <input className="form-control" placeholder="Ingresa el titulo" type="text" value={expenseTitle} onChange={(e) => setExpenseTitle(e.target.value)} />
              </div>
              <Button className="my-button" onClick={handleClick} variant="primary">Guardar gastos</Button>
            </Card.Body>
          </Card>
          <Card className="text-center">
          <Card.Header>Gastos Guardados</Card.Header>
          <Card.Body>
            <ul>
              {savedExpenses.map((user, index) => (
                <li key={index}>
                  <Link to={'/expense/'+index}>{user.title}</Link>
                  <Button className="my-button" variant="danger" onClick={() => deleteSavedExpense(index)}>Eliminar</Button>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
          
        </Col>
      </Row>   
    </Container>
    )
  }