import React from 'react';  
import { Button, ListGroup } from 'react-bootstrap';  

function ExpenseList({ expenses, deleteExpense }) {  
  return (  
    <ListGroup>  
      {expenses.map((expense, index) => (  
        <ListGroup.Item key={index}>  
          <div>  
            <span>Nombre del gasto: {expense.name}</span>  
            <br />  
            <span> {expense.category}</span>  
            <br />  
            <span>Valor: {expense.amount}</span>  
          </div>  
          <Button className="my-button2" variant="danger" size="sm" onClick={() => deleteExpense(index)}>Eliminar</Button>  
        </ListGroup.Item>  
      ))}  
    </ListGroup>  
  );  
}  

export default ExpenseList;