import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (amount <= 0) {
      alert('Por favor, introduce una cantidad positiva.');
      return;
    }
    if (category.trim() === '') {
      alert('Por favor, introduce una categoría.');
      return;
    }
    addExpense({ amount, category });
    setAmount('');
    setCategory('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Cantidad</Form.Label>
        <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Categoría</Form.Label>
        <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </Form.Group>
      <Button className="my-button" variant="primary" type="submit">Añadir gasto</Button>  
    </Form>
  );
}

export default ExpenseForm;
