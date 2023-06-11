import { Button, ListGroup } from 'react-bootstrap';  
import { moneyFormat } from '../utils';

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
            <span>Valor: {moneyFormat(expense.amount)}</span>  
          </div>  
          <Button className="my-button2" variant="danger" size="sm" onClick={() => deleteExpense(index)}>Eliminar</Button>  
        </ListGroup.Item>  
      ))}  
    </ListGroup>  
  );  
}  

export default ExpenseList; 