import { useContext, useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { ExpenseContext } from '../App';
import ExpenseList from '../components/ExpenseList';

export default function ExpensePage() {
    const { savedExpenses } = useContext(ExpenseContext);
    const { id } = useParams();
    const [expenses, setExpenses] = useState([])
     useEffect(() => {
      id && setExpenses(savedExpenses[id].expenses)
     }, [id, savedExpenses])

    return (
      <Container>
        <Link to="/expenses">Volver a expenses</Link>
        <Row>
          <Col md={12}>
            <Card className="text-center">
              <Card.Header>Gastos guardados</Card.Header>
              <Card.Body>
                <ExpenseList expenses={expenses} deleteExpense={() => {}} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }