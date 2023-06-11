import { useContext, useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ExpenseContext } from '../App';
import ExpenseList from '../components/ExpenseList';
import { moneyFormat } from '../utils';

const ExpensePage = () => {
  const navigate = useNavigate()
  const { savedExpenses } = useContext(ExpenseContext);
  const { id } = useParams();
  const [expenses, setExpenses] = useState({total: 0, expensesArr: []});
  useEffect(() => {
    if (id && savedExpenses[id]) {
      const total = savedExpenses[id].expenses.reduce((a,b) => Number(a.amount) + Number(b.amount))
      setExpenses({total, expensesArr: savedExpenses[id].expenses});
      console.log(savedExpenses[id].expenses);
    } else {
      navigate('/expenses')
    }
  }, [id, savedExpenses, navigate]);

 /*  useEffect(() => {
    const total = expenses.reduce((a,b) => (a.amount + b, 0))
    setTotal(total)
  }, [expenses]) */

  return (
    <Container>
      <Link to="/expenses">Volver a expenses</Link>
      <Row>
        <Col md={12}>
          <Card className="text-center">
            <Card.Header>Gastos guardados</Card.Header>
            <Card.Body>
              <ExpenseList expenses={expenses.expensesArr} deleteExpense={() => {}} />
            </Card.Body>
             <Card.Footer>Total gastado: {moneyFormat(expenses.total)}</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ExpensePage;
